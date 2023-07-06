import PetsContainer from "../persistence/pets.container.js"
import { catsSchema } from "../models/cats.models.js";

const catsManager = new PetsContainer(catsSchema);

export const getAll = async (req, res) => {
 try {
    let cats = await catsManager.getAll(req.query.status);
    res.send(cats);  
 } catch (error) {
    console.log("cats not found");
 } 
}

export const getById = async (req, res) => {
   try {
      const { id } = req.params;
      const catFound = await catsManager.getById(id);
      if(catFound){
         res.send(catFound);
      }else{
         res.status(404).send("id not found");
      }
   } catch (error) {
      
   }
}

export const addPet = async (req, res) => {
   try {
      console.log(req.body);
      const newPet = await catsManager.addPet(req.body);
      res.send(newPet);
   } catch (error) {
      res.status(404).send("error adding pet")
   }
}

export const updateById = async (req, res) => {
   try {
     const { id } = req.params;
     const updateCat = await catsManager.updateById(id, req.body);
     res.send(updateCat);
   } catch (error) {
     res.status(404).send("Error updating pet");
   }
 }

 export const deleteById = async (req, res) => {
   try {
      const { id } = req.params;
      const deletedCat = await catsManager.deleteById(id);
      res.send(deletedCat);
   } catch (error) {
      res.status(404).send("Error deleting pet");
   }
 }
 