import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://localhost:3004`,
});

axiosClient.interceptors.response.use((reponse) => {
  return reponse;
});

export default axiosClient;
