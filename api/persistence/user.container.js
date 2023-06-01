import { createHash, isValid } from "../config/hashPassword.js";
import { userSchema } from "../models/users.models.js";

class UserContainer {
  constructor(model) {
    this.model = model;
  }

  async createUser(username, password) {
    try {
      const hashedPassword = createHash(password);
      const newUser = {
        username: username,
        password: hashedPassword,
      };
      const userExist = await this.model.findOne({ username: username})
      if (userExist) {
        throw new Error("User already exists");
      }
      const createdUser = await this.model.create(newUser);
      return username;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }

  async userLogin( username, password) {
    try {
      const userExist = await this.model.findOne({ username: username});
      if(!userExist){
        throw new Error("User does not exist");
      }
      const match = isValid(password, userExist.password);
      if(match){
        return userExist;
      }else{
        throw new Error("Invalid password");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async getUsers(){
    try {
      const users = await this.model.find();
      return users;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default UserContainer;