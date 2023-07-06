import axios from "axios";
import { startCats, successCats, errorCats } from "../Slices/cats.slice";

export const catsFetch = async (dispatch) => {
  dispatch(startCats());
  try {
    const response = await axios.get("http://localhost:8000/api/cats");
    dispatch(successCats(response.data));
  } catch (error) {
    dispatch(errorCats());
  }
};
