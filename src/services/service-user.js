import { axiosInstance } from "./configs";

async function getUsers() {
  try {
    return await axiosInstance.get("users");
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

async function getUserByID(uID) {
  try {
    return await axiosInstance.get(`user/:${uID}`);
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

async function updateUserInfo(uID, data) {
  try {
    return await axiosInstance.put(`user/:${uID}`, { ...data });
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

export const Users = {
  getUsers,
  getUserByID,
  updateUserInfo,
};
