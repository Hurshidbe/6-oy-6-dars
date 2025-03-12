import { DataSource } from "typeorm";
import usersSchema from "../entity/users.entity.js";
import PostSchema from "../entity/posts.entity.js";

const database = new DataSource({
  type: "postgres",
  host: process.env.db_host,
  port: process.env.db_port,
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.db_database,
  synchronize: true,
  entities: [usersSchema, PostSchema], // Mana bu yerda to‘g‘ri import qilinishi kerak!
});

export default database;
