import PetsContainer from "../persistence/pets.container.js"
import { dogsSchema } from "../models/dogs.models.js"

const dogsManager = new PetsContainer(dogsSchema);

export const getAll = async (req, res) => {
 try {
    let pets = await dogsManager.getAll();
    console.log(pets);
    res.send(pets);  
 } catch (error) {
    console.log("Pets not found");
 } 
}



