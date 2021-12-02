import axios from "axios";

const BASE_URL = "http://localhost:3000";
const USER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTUxZTU3OTBjYTE2NjU2YzdjZGE5OCIsImlhdCI6MTYzODI0MDgyNywiZXhwIjoxNjQ2ODgwODI3fQ.gxhsvp0huKkdCzopFz_aasQWX-IZoaytOOALBnP-DTA";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: USER_TOKEN,
  },
});
