import { loader } from "../http";

export async function fetchAllProducts() {
  return await loader("products?populate=*");
}
