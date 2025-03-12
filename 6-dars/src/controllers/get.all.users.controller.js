import database from "../config/connectdb.js";

const getAllUsersControllers = async (req, res) => {
  try {
    const userRepository = database.getRepository("User");
    const User = await userRepository.find();
    res.status(201).json({ message: "success", User });
  } catch (error) {
    res.status(401).json({ message: "cannot at all users" });
    console.log(error.message);
  }
};

export default getAllUsersControllers;
