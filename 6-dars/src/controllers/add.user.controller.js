import database from "../config/connectdb.js";
import usersSchema from "../entity/users.entity.js";
const addUserController = async (req, res) => {
  try {
    const { firstname, lastname, email, age } = req.body;
    const userRepository = database.getRepository("User");
    const newUser = userRepository.create({ firstname, lastname, email, age });
    await userRepository.save(newUser);
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error with adding user", error: error.message });
  }
};
export default addUserController;
