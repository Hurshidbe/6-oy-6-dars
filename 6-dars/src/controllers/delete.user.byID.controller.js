import database from "../config/connectdb.js";

const deleteUserByIdcontroller = async (req, res) => {
  try {
    const { id } = req.params;
    const userRepository = database.getRepository("User");

    const user = await userRepository.findOne({ where: { id } });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Bu ID ostida foydalanuvchi mavjud emas" });
    }

    await userRepository.delete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "deleteUserByIdController faylida xatolik" });
  }
};

export default deleteUserByIdcontroller;
