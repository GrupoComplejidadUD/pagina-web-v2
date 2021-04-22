const { API_URL = "localhost:1337" } = process.env;

export async function getApiData(endpoint: string) {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`);
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function sendApiData(endpoint: string, data: any) {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
