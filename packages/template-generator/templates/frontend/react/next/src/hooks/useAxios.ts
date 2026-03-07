import https from "https";

import axios, { AxiosInstance } from "axios";

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export const createNewClient: () => AxiosInstance = () => {
  const BASE_API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/";

  return axios.create({
    baseURL: BASE_API,
    headers: {
      Accept: "application/json",
    },
    httpsAgent,
  });
};

export const client: AxiosInstance = createNewClient();

type HookType = (accessToken?: string) => AxiosInstance;

export const useAxios: HookType = (accessToken) => {
  client.interceptors.request.use((config) => {
    const newConfig = { ...config };

    if (accessToken) {
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
    }

    return newConfig;
  });

  return client;
};

export const { isAxiosError } = axios;
