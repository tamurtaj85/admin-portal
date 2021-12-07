import axios from "axios";

// const BASE_URL = "http://localhost:3000"; //BE ip for local machine
const BASE_URL = "http://ec2-3-251-76-179.eu-west-1.compute.amazonaws.com:3000"; //for AWS server BE

const USER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTUxZTU3OTBjYTE2NjU2YzdjZGE5OCIsImlhdCI6MTYzODI0MDgyNywiZXhwIjoxNjQ2ODgwODI3fQ.gxhsvp0huKkdCzopFz_aasQWX-IZoaytOOALBnP-DTA";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    // "Access-Control-Allow-Origin": BASE_URL,
    // "Access-Control-Allow-Headers":
    //   "Origin, X-Requested-With, Content-Type, Accept",
    Authorization: USER_TOKEN,
  },
});
