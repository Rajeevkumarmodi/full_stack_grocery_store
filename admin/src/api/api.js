const BASE_URL = "http://localhost:8901/api/v1";

// category create api

export async function createCategory(data, endPoint) {
  try {
    const res = await fetch(`${BASE_URL}/${endPoint}`, {
      method: "POST",
      body: data,
    });
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    return error;
  }
}

export async function getData(endPoint) {
  try {
    const res = await fetch(`${BASE_URL}/${endPoint}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

// update api with image
export async function updateData(data, endPoint) {
  try {
    const res = await fetch(`${BASE_URL}/${endPoint}`, {
      method: "PUT",
      body: data,
    });
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    return error;
  }
}

// delete

export async function deleteData(endPoint) {
  try {
    const res = await fetch(`${BASE_URL}/${endPoint}`, {
      method: "DELETE",
    });
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    return error;
  }
}
