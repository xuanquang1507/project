import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://18.143.129.2/api-quang`,
});

axiosClient.interceptors.response.use((reponse) => {
  return reponse;
});

export default axiosClient;
