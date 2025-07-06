import { loader } from "../http";

export async function fetchAllProducts() {
  return await loader("products?populate=*");
}

export async function fetchProduct(id: number) {
  return await loader(`products?filters[id]=${id}`);
}
