import database from "../config/connectdb.js";

const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const userRepository = database.getRepository("User");
    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
      res.status(404).json({ message: "bu id ostida user mavjud emas" });
    } else {
      res.json({ message: "success", user });
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: "getUserByIdController da xatolik" });
  }
};
export default getUserByIdController;
