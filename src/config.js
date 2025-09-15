let SERVER_ENDPOINT = '';

if (process.env.NODE_ENV === 'production') {
  SERVER_ENDPOINT = '';
}

export default {
  serverEndpoint: SERVER_ENDPOINT,
  localstorageKeys: {
    ADMIN_TOKEN: 'adminToken',
    REFRESH_TOKEN:'refreshToken',
    USER_ROLE: 'userRole',
    LASTPATH: 'lastPath'
  }
};
