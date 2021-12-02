import { axiosInstance } from "./configs";

async function AddProduct(data) {
  try {
    return await axiosInstance.post("product", { ...data });
  } catch (e) {
    console.error("Axios: ", e.message, " ", e.response.data);
  }
}

async function UpdateProduct(id, data) {
  try {
    return await axiosInstance.put(`product/${id}`, { ...data });
  } catch (e) {
    console.error("Axios: ", e.message, " ", e.response.data);
  }
}

export const Product = {
  AddProduct,
  UpdateProduct,
};
