import { axiosInstance } from "./configs";

async function GetProducts() {
  try {
    return await axiosInstance.get("products");
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

async function AddProduct(data) {
  try {
    return await axiosInstance.post("product", { ...data });
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

async function GetProductByID(id) {
  try {
    return await axiosInstance.get(`product/:${id}`);
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

async function getProductByCategory(id) {
  try {
    return await axiosInstance.get(`products/category/:${id}`);
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

async function UpdateProduct(id, data) {
  try {
    return await axiosInstance.put(`product/:${id}`, { ...data });
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

async function DeleteProduct(id) {
  try {
    return await axiosInstance.delete(`product/:${id}`);
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

export const Product = {
  GetProducts,
  AddProduct,
  GetProductByID,
  getProductByCategory,
  UpdateProduct,
  DeleteProduct,
};
