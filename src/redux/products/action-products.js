import { store } from "../../store";
import { Services } from "../../services";

async function getProductsData() {
  const response = await Services.Product.GetProducts();
  // console.log(response);
  return await response.data;
}
