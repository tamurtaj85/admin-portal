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
    return await axiosInstance.get("category", { timeout: 10000 });
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}

async function getCategoriesNames() {
  try {
    const response = await getCategories();
    // console.log("getCategoriesNames: ", response.data);

    const labels = response?.data.map((category) => {
      return category.parentCategory;
    });
    // console.log("getCategoriesNamesLbls: ", labels);

    return labels;
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}

export const Categories = {
  getCategories,
  getNumberOfProductPerCategory,
  getCategoriesNames,
};
