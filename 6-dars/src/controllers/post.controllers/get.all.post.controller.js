import database from "../../config/connectdb.js";

const getAllPostsController = async (req, res) => {
  try {
    const getRepository = database.getRepository("Post"); // Repositoryni shu yerda chaqiramiz
    const allPosts = await getRepository.find(); // Ma'lumotlarni olish

    res.status(200).json({ message: "success", allPosts }); // To‘g‘ri joylashtirish
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default getAllPostsController;
