import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import PersonalUsers from "models/PersonalUser";
import Connect from "utils/connectDB";
import { CompairPassword } from "utils/passwordOperations";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const SECRET_KEY = 'e73f1ece5087b8a5ae33998952202202';

  const { user, password } = req.body;
  if (!user || !password) {
    res.status(422).json({ status: "failed", message: "Invalid Data!" });
    return;
  }

  const fs = require("fs");
  const envfile = require("envfile");
  console.log(envfile);
  const sourcePath = ".env";
  console.log(envfile.parse(sourcePath));
  let parsedFile = envfile.parse(sourcePath);
  parsedFile.USER_NAME = user;
  fs.writeFileSync("./.env", envfile.stringify(parsedFile));
  console.log(envfile.stringify(parsedFile));

  console.log(user, password);
  await Connect();
  const newUser = await PersonalUsers.findOne({ userName: user });
  if (!newUser) {
    res.status(404).json({ status: "faild", message: "Not Found User!" });
    return;
  }

  const verifyPassword = await CompairPassword(password, newUser.password);
  if (!verifyPassword) {
    res
      .status(422)
      .json({ status: "failed", message: "userName Or Password incorrect!" });
    return;
  }

  const token = await sign({ user }, SECRET_KEY);
  const serialized = serialize("token", token, {
    httpOnly: true,
    maxAge: 99999999,
    path: "/",
  });
  console.log(token);
  res
    .status(200)
    .setHeader("Set-Cookie", serialized)
    .json({ status: "success", message: "Login", data: newUser });
}
