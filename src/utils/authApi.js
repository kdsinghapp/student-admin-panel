import axios from "axios";

const API_URL = "https://server-php-8-3.technorizen.com/gradesphere/api";
const token = localStorage.getItem("userTokenStudent");

export const signInAdmin = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/admin/login`, data);
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const getAllClasses = async () => {
  try {
    const res = await axios.get(`${API_URL}/admin/classes`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching classes:", error);
    throw error;
  }
};

export const getClassById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/admin/classes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching classes:", error);
    throw error;
  }
};

export const deleteClassById = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/admin/classes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching classes:", error);
    throw error;
  }
};

export const updateClassById = async (id, data) => {
  try {
    const res = await axios.put(`${API_URL}/admin/classes/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error updating class:", error);
    throw error;
  }
};

