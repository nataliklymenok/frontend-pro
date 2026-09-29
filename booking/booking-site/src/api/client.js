import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function apiGet(path, params = {}) {
  const response = await axios.get(`${BASE_URL}${path}`, { params });
  return response.data;
}
