import UserContainer from "../persistence/user.container.js";
import { userSchema } from "../models/users.models.js";

const userContainer = new UserContainer(userSchema);

export const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const createdUser = await userContainer.createUser(username, password);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const userLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userLog = await userContainer.userLogin(username, password);
    if(userLog){
      res.status(200).json(userLog);
    }else{
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const getUsers = async (req, res) => {
  try {
    let users = await userContainer.getUsers();
    res.send(users);
  } catch (error) {
    console.log("users not found");
  }
}


