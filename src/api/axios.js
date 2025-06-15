import axios from "axios";

export const apiRequest = async (url, params) => {
  const options = {
    method: "GET",
    url: url,
    params: params ? params : {},
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    return error;
  }
};
