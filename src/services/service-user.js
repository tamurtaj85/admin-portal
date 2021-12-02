import { axiosInstance } from "./configs";

async function getUsers() {
  try {
    return await axiosInstance.get("users");
  } catch (err) {
    console.error(err.message, " ", err.response.data);
  }
}

export const Users = {
  getUsers,
};
