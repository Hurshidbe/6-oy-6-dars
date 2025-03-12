import database from "../../config/connectdb.js";

const updatePostByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userRepository = database.getRepository("Post");
    const updatedPost = await userRepository.findOne({
      where: { id },
    });
    if (!updatedPost) {
      return res
        .status(404)
        .json({ message: "bu id ostida hech aqanday post mavjud emas" });
    } else {
      updatedPost.content = content || updatedPost.content;
      updatedPost.title = title || updatedPost.title;
      await userRepository.save(updatedPost);
      res.status(201).json({ message: "succes", updatedPost });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "updatePostController faylida hatolik" });
  }
};

export default updatePostByIdController;
