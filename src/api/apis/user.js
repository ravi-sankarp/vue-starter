import http from '@/api/http';

export const GetUser = async () => {
  const { data } = await http.GET('/user');
  return data;
};

export const EditUser = async (body) => {
  const { data } = await http.PATCH('/user', body);
  return data;
};

export const EditPassword = async (body) => {
  const { data } = await http.PATCH('/user/update-password', body);
  return data;
};
