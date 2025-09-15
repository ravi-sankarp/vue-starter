import http from '@/api/http';
import Config from '@/config';

export const AdminLogin = async (body) => {
  const { data } = await http.POST('/auth/signin', body);
  return data;
};

export const GenerateRefreshToken = async () => {
  const body = {
    refreshToken: localStorage.getItem(Config.localstorageKeys.REFRESH_TOKEN)
  };
  const { data } = await http.POST('/auth/refresh-token', body);
  return data;
};
