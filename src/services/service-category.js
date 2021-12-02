import { axiosInstance } from "./configs";

async function getCategories() {
  try {
    return await axiosInstance.get("categories");
  } catch (e) {
    console.error(e);
  }
}

export const Categories = {
  getCategories,
};
