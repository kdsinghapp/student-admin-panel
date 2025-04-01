import axios from "axios";

const API_URL = "https://server-php-8-3.technorizen.com/gradesphere/api";

export const signInAdmin = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/admin/login`, data);
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};
