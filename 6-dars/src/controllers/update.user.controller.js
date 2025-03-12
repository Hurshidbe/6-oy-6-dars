import database from "../config/connectdb.js";

const updateUserInfoController = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, email, age } = req.body;
    const userRepository = database.getRepository("User");
    const updatedUser = await userRepository.findOne({ where: { id } });
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "bu id ostida foidalanuvchi mavjud emas" });
    } else {
      updatedUser.firstname = firstname || updatedUser.firstname;
      updatedUser.lastname = lastname || updatedUser.lastname;
      updatedUser.email = email || updatedUser.email;
      updatedUser.age = age || updatedUser.age;

      await userRepository.save(updatedUser);
      res
        .status(201)
        .json({ message: "user updated successfully", updatedUser });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "user ma'lumotlarini yangilashda xatolik kelib chiqdi",
    });
  }
};

export default updateUserInfoController;
