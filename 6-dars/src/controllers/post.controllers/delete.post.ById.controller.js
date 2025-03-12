import database from "../../config/connectdb.js";

const deletePostByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const getRepository = database.getRepository("Post");

    // Avval post mavjudligini tekshiramiz
    const findPost = await getRepository.findOne({ where: { id } });

    if (!findPost) {
      return res
        .status(404)
        .json({ message: "ushbu id ostida post topilmadi" });
    }

    // Postni o'chiramiz
    await getRepository.delete(id);

    res.status(200).json({ message: "post successfully deleted" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "deletePostById controller faylida hatolik" });
  }
};

export default deletePostByIdController;
