import axios from "axios";
import {
  startCreatePet,
  successCreatePet,
  errorCreatePet,
} from "../Slices/createPet.slice";

export const createPetFetch = async (dispatch, payload) => {
  dispatch(startCreatePet());
  try {
    if (payload.type === "cat") {
      const res = await axios.post("https://localhost:8000/api/cats", payload);
      dispatch(successCreatePet(res.data));
    } else if (payload.type === "dog") {
      const res = await axios.post("https://localhost:8000/api/dogs", payload);
      dispatch(successCreatePet(res.data));
    }
  } catch (error) {
    dispatch(errorCreatePet(error));
  }
};
