import { axiosInstance } from "./configs";

async function getUsers() {
  try {
    return await axiosInstance.get("users");
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}

async function getUserByID(uID) {
  try {
    return await axiosInstance.get(`user/:${uID}`);
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}

export const Users = {
  getUsers,
  getUserByID,
};
