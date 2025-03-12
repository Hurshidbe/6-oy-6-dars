import { EntitySchema } from "typeorm";

const PostSchema = new EntitySchema({
  name: "Post",
  tableName: "posts",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    title: {
      type: "varchar",
      length: 150,
    },
    content: {
      type: "text",
      nullable: true,
    },
    created_at: {
      type: "timestamp",
      createDate: true, // createDateColumn ishlatish yaxshiroq
    },
  },
  relations: {
    user: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      onDelete: "CASCADE",
    },
  },
});

export default PostSchema;
