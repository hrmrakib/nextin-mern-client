import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:4000",
  // baseURL: "https://airbnb-backend-six.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
