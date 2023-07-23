const key = "38412283-566238038c13b6dc458c2a376";
const API_BASE_URL = "https://pixabay.com/api/";



export async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}?key=${key}${queryString}`);
  const data = await response.json();
  return data;
}
