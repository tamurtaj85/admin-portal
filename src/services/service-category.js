import { axiosInstance } from "./configs";

async function getCategories() {
  try {
    return await axiosInstance.get("categories");
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}

async function getNumberOfProductPerCategory() {
  try {
    return await axiosInstance.get("category");
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}

export const Categories = {
  getCategories,
  getNumberOfProductPerCategory,
};
