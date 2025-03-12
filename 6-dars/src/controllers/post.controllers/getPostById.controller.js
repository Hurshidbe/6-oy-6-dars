import database from "../../config/connectdb.js";

const getPostByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const getRepository = database.getRepository("Post");
    const findedPost = await getRepository.findOne({ where: { id } });
    if (!findedPost) {
      res.status(401).json({ message: "bu id ostida post topilmadi" });
    } else {
      res.status(201).json({ message: "success", findedPost });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message:
        "server error. getPostById controller falida hatolik kelib chiqdi",
    });
  }
};

export default getPostByIdController;
