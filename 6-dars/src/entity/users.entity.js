import { EntitySchema } from "typeorm";

const usersSchema = new EntitySchema({
  name: "User", // TypeORM shunday nom bilan metadata yaratadi
  tableName: "users", // Bazadagi jadval nomi
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    firstname: {
      type: "varchar",
      length: 50,
      nullable: false,
    },
    lastname: {
      type: "varchar",
      length: 50,
    },
    email: {
      type: "varchar",
      length: 50,
      unique: true,
      nullable: false,
    },
    age: {
      type: "int",
      nullable: true,
    },
    created_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
});

export default usersSchema;
