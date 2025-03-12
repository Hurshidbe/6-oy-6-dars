import express from "express";
import "dotenv/config";
import database from "./config/connectdb.js";
import ROUTES from "./routes/main.routes.js";
const app = express();
app.use(express.json());
app.use(ROUTES);
const PORT = process.env.PORT;
app.use(express.json());

const bootcamp = async () => {
  try {
    await database.initialize();
    console.log("database connected successfully!!!");
    app.listen(PORT, () =>
      console.log("server is successfully running at port:", PORT)
    );
  } catch (error) {
    console.log(error.message);
  }
};

bootcamp();
