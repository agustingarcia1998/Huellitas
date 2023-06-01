class PetsContainer {
    constructor(model) {
        this.model = model;
    }

    async getAll(){
        try {
            const pets = await this.model.find();
            // console.log(pets);
            return pets;
        } catch (error) {
            console.log(error.message);
        }
    }

    async getById(id) {
        try {
            const petFound = await this.model.findOne({_id: id});
            return petFound;
        } catch (error) {
            console.log(error.message);
        }
    }

    async addPet(newPet) {
        try {
            const petSave = await this.model.create(newPet);
            return petSave;
        } catch (error) {
            console.log(error.message);
        }
    }

    async updateById(id, params) {
        try {
          return this.model.updateOne({ _id: id }, params);
        } catch (error) {
          console.log(error.message);
          throw error;
        }
      }

    async deleteById(id) {
        try {
            return this.model.deleteOne({_id: id});
        } catch (error) {
            console.log(error.message);

        }
    }
    


}

export default PetsContainer;