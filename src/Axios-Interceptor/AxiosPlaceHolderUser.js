import axios from 'axios';

// Set up the axios instance with an interceptor
export const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {

        console.log("Request Sent", config);

      return config;
    },
    (error) => {
      // Handle request errors here
      return Promise.reject(error);
    }
  );
  
  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // Modify the response before the component gets it
      console.log("Response Received", response);
      return response;
    },
    (error) => {
      // Handle errors here
      console.error("Response Error", error);
      return Promise.reject(error);
    }
  );