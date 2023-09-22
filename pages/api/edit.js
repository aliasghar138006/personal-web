import PersonalUser from "models/PersonalUser";
import Connect from "utils/connectDB";
import { VerifyToken } from "utils/passwordOperations";


export default async function handler(req, res) {
    
  if (req.method !== "POST") return;
  const {
    form: { fullName, email, city, shortDescription, descriptions , image , skills , educations },
  } = req.body;
  // if(!fullName){
  //     return res.status(422).json({status:'failed' , message:'invalid data!'})
  // }
  
  

  const { token } = req.cookies;
  const { user } = await VerifyToken(token, process.env.SECRET_KEY);

  await Connect();

  const newUser = await PersonalUser.findOne({ userName: user });

  if (!newUser) {
    return res
      .status(401)
      .json({ status: "failed", message: "user Not found!" });
  }

  console.log(educations);
  newUser.fullName = fullName;
  newUser.email = email;
  newUser.city = city;
  newUser.shortDescription = shortDescription;
  newUser.descriptions = descriptions;
  newUser.image = image;
  newUser.skills = skills;
  newUser.educations = educations;
  newUser.save();

  res
    .status(200)
    .json({ status: "success", message: "Edited Data", data: newUser });
}
