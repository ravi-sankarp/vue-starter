import Config from '@/config.js';
import { GenerateRefreshToken } from './apis/auth';

const getHeaders = (customHeaders = {}, fileUpload = false) => {
  let token = '';
  if (window.location.pathname.includes('admin')) {
    token = localStorage.getItem(Config.localstorageKeys.ADMIN_TOKEN);
  }
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...customHeaders
  };
  if (fileUpload) {
    delete headers['Content-Type'];
  }
  if (token) {
    headers.Authorization = 'Bearer ' + token;
  }
  return headers;
};

// fetch wrapper for rejecting 400 errors
function fetchWrapper(url, body) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(url, body);
      const jsonResponse = await res.json();
      if (!res.ok) {
        if (res.status === 401 && jsonResponse?.message.toLowerCase()?.includes('invalid token')) {
          localStorage.clear();
          localStorage.setItem(Config.localstorageKeys.LASTPATH, window.location.pathname);
          window.location = '/admin/login';
        } else if (
          res.status === 401 &&
          url.includes('/auth/refresh-token') &&
          jsonResponse?.message?.toLowerCase()?.includes('refresh token expired')
        ) {
          jsonResponse.message = 'Your session has expired ! Please login again';
          localStorage.clear();
          localStorage.setItem(Config.localstorageKeys.LASTPATH, window.location.pathname);
          window.location = '/admin/login';
        } else if (
          res.status === 401 &&
          jsonResponse?.message?.toLowerCase()?.includes('token expired')
        ) {
          const { token } = await GenerateRefreshToken();
          localStorage.setItem(Config.localstorageKeys.ADMIN_TOKEN, token);
          body.headers.Authorization = 'Bearer ' + token;
          const fetchRes = await fetchWrapper(url, body);
          resolve(fetchRes);
          return;
        }
        reject(jsonResponse);
      }
      resolve(jsonResponse);
    } catch (err) {
      reject(err);
    }
  });
}

export default {
  GET: async (path, headers = {}) => {
    const url = Config.serverEndpoint + path;
    const res = await fetchWrapper(url, {
      headers: getHeaders(headers)
    });
    return res;
  },
  PUT: async (path, body, headers = {}, fileUpload = false) => {
    const url = Config.serverEndpoint + path;
    const res = await fetchWrapper(url, {
      method: 'PUT',
      headers: getHeaders(headers, fileUpload),
      body: fileUpload ? body : JSON.stringify(body)
    });
    return res;
  },
  PATCH: async (path, body, headers = {}) => {
    const url = Config.serverEndpoint + path;
    const res = await fetchWrapper(url, {
      method: 'PATCH',
      headers: getHeaders(headers),
      body: JSON.stringify(body)
    });
    return res;
  },
  POST: async (path, body, headers = {}) => {
    const url = Config.serverEndpoint + path;

    const res = await fetchWrapper(url, {
      method: 'POST',
      headers: getHeaders(headers),
      body: JSON.stringify(body)
    });
    return res;
  },
  DELETE: async (path, headers = {}) => {
    const url = Config.serverEndpoint + path;
    const res = await fetchWrapper(url, {
      method: 'DELETE',
      headers: getHeaders(headers)
    });
    return res;
  }
};
