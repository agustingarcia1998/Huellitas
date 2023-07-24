import axios from "axios";
import {
  startCreatePet,
  successCreatePet,
  errorCreatePet,
} from "../Slices/createPet.slice";

export const createPetFetch = async (dispatch, payload) => {
  dispatch(startCreatePet());
  console.log(payload);
  try {
    if (payload.type === "Cat") {
      const res = await axios.post("http://localhost:8000/api/cats", payload);
      dispatch(successCreatePet(res.data));
    } else if (payload.type === "Dog") {
      const res = await axios.post("http://localhost:8000/api/dogs", payload);
      dispatch(successCreatePet(res.data));
    }
  } catch (error) {
    dispatch(errorCreatePet(error));
  }
};
