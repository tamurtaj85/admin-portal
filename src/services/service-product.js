import { axiosInstance } from "./configs";

async function GetProducts() {
  try {
    return await axiosInstance.get("products");
  } catch (error) {
    console.error("Axios: ", error.message, " ", error.response.data);
  }
}

async function AddProduct(data) {
  try {
    return await axiosInstance.post("product", { ...data });
  } catch (error) {
    console.error("Axios: ", error.message, " ", error.response.data);
  }
}

async function GetProductByID(id) {
  try {
    return await axiosInstance.get(`product/:${id}`);
  } catch (error) {
    console.error("Axios: ", error.message, " ", error.response.data);
  }
}

async function UpdateProduct(id, data) {
  try {
    return await axiosInstance.put(`product/:${id}`, { ...data });
  } catch (error) {
    console.error("Axios: ", error.message, " ", error.response.data);
  }
}

async function DeleteProduct(id) {
  try {
    return await axiosInstance.delete(`product/:${id}`);
  } catch (error) {
    console.error("Axios: ", error.message, " ", error.response.data);
  }
}

export const Product = {
  GetProducts,
  AddProduct,
  GetProductByID,
  UpdateProduct,
  DeleteProduct,
};
