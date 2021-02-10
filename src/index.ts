import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import { UserModel } from "./schemas";
import { UserController } from "./controllers";

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const User = new UserController();

app.get("/users/:id", User.show);
app.post("/users/create", User.create);
app.delete("/users/:id", User.delete);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
