import axios from "axios";
import { errorDogs, startDogs, successDogs } from "../Slices/dogs.slice";

export const dogsFetch = async (dispatch) => {
  dispatch(startDogs());
  try {
    const response = await axios.get("http://localhost:8000/api/dogs");
    dispatch(successDogs(response.data));
  } catch (error) {
    dispatch(errorDogs());
  }
};
