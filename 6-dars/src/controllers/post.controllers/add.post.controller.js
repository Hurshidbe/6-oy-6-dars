import database from "../../config/connectdb.js";

const addPostController = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userRepository = database.getRepository("Post");
    const newPost = userRepository.create({ title, content });
    await userRepository.save(newPost);
    res.status(201).json({ message: "Post added successfully", newPost });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "addPostController faylida xatolik" });
  }
};
export default addPostController;
