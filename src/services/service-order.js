import { axiosInstance } from "./configs";

async function getOrdersList() {
  try {
    return axiosInstance.get("/order");
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}

export const Order = {
  getOrdersList,
};
