import { axiosInstance } from "./configs";

async function getOrdersList() {
  try {
    return axiosInstance.get("order");
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

async function getOrderInfo(oID) {
  try {
    return await axiosInstance.get(`order/:${oID}`);
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

export const Order = {
  getOrdersList,
  getOrderInfo,
};
