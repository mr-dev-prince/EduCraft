import axios from "axios";

export const fetchUserData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/v1/users/getuser",
      { withCredentials: true }
    );
    console.log("response from fetchuserdata", response);
    return response.data?.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
