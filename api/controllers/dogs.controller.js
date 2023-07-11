import PetsContainer from "../persistence/pets.container.js"
import { dogsSchema } from "../models/dogs.models.js"

const dogsManager = new PetsContainer(dogsSchema);

export const getAll = async (req, res) => {
 try {
    let dogs = await dogsManager.getAll(req.query.status);
    res.send(dogs);  
 } catch (error) {
    console.log("dogs not found");
 } 
}

export const getById = async (req, res) => {
   try {
      const { id } = req.params;
      const dogFound = await dogsManager.getById(id);
      if(dogFound){
         res.send(dogFound);
      }else{
         res.status(404).send("id not found");
      }
   } catch (error) {
      
   }
}

export const addPet = async (req, res) => {
   try {
      console.log(req.body);
      const newPet = await dogsManager.addPet(req.body);
      res.send(newPet);
   } catch (error) {
      res.status(404).send("error adding pet")
   }
}

export const updateById = async (req, res) => {
   try {
     const { id } = req.params;
     const updateDog = await dogsManager.updateById(id, req.body);
     res.send(updateDog);
   } catch (error) {
     res.status(404).send("Error updating pet");
   }
 }

 export const deleteById = async (req, res) => {
   try {
      const { id } = req.params;
      const deleteDog = await dogsManager.deleteById(id);
      res.send(deleteDog);
   } catch (error) {
      res.status(404).send("Error deleting pet");
   }
 }
 

 




