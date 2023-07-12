import axios from "axios";
import { startCreatePet, successCreatePet, errorCreatePet } from "../Slices/createPet.slice";

export const createPetFetch = async (dispatch, payload) => {
    dispatch(startCreatePet());
    try {
        const res = await axios.post("")
    } catch (error) {
        
    }
}