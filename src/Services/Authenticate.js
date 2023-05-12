import axios from "axios"

export const isAuthenticatedCallback = async () => {
    try {
      const response = await axios.get('security');
      console.log(response.data.Authenticate)
      return response.data.Authenticate
    } catch (error) {
      console.error(error);
      return false;
    }
  };