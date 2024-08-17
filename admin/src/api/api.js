const BASE_URL = "http://localhost:8901/api/v1";

// category create api

export async function createCategory(data, endPoint) {
  const res = await fetch(`${BASE_URL}/${endPoint}`, {
    method: "POST",
    body: data,
  });
  const jsonData = await res.json();
  return jsonData;
}

export async function getData(endPoint) {
  const res = await fetch(`${BASE_URL}/${endPoint}`);
  const data = await res.json();
  return data;
}
