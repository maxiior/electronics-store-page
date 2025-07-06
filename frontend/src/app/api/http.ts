import { flattenAttributes, getStrapiURL } from "./utils";

export async function fetchData(url: string, authToken?: string) {
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    if (!response.ok) throw new Error("Failed to fetch data");
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

export async function loader(route: string) {
  const endpoint = `/api/${route}`;
  const url = new URL(endpoint, getStrapiURL());
  const data = await fetchData(url.href);
  return data;
}
