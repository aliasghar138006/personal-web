import PersonalUser from "models/PersonalUser";
import Connect from "utils/connectDB";
import { VerifyToken } from "utils/passwordOperations";


export default async function handler(req, res) {
    
  if (req.method !== "POST" && req.method !== "DELETE") return;
  
  if(req.method == "POST"){
    const {
      form: { fullName, email, city, shortDescription, descriptions , image , skills , educations , experience , documents , commendations , simples  , courses , phone , telegram , instagram , resume},
    } = req.body;
    // if(!fullName){
    //     return res.status(422).json({status:'failed' , message:'invalid data!'})
    // }
    
    const SECRET_KEY = 'e73f1ece5087b8a5ae33998952202202';
  
    const { token } = req.cookies;
    const username = await VerifyToken(token,SECRET_KEY).user;
    console.log(username);
  
    await Connect();
  
    const newUser = await PersonalUser.findOne({ userName: username });
  
    if (!newUser) {
      return res
        .status(401)
        .json({ status: "failed", message: "user Not found!" });
    }
  
    console.log(educations);
    newUser.fullName = fullName;
    newUser.email = email;
    newUser.phone = phone;
    newUser.telegram = telegram;
    newUser.instagram = instagram;
    newUser.resume = resume;
    newUser.city = city;
    newUser.shortDescription = shortDescription;
    newUser.descriptions = descriptions;
    newUser.image = image;
    newUser.skills = skills;
    newUser.educations = educations;
    newUser.experience = experience;
    newUser.documents = documents;
    newUser.commendations = commendations;
    newUser.simples = simples;
    newUser.courses = courses;
    newUser.save();
  
    res
      .status(200)
      .json({ status: "success", message: "Edited Data", data: newUser });
  }

  if(req.method == "DELETE"){
    const {index} = req.body;
    await Connect();
    const user = await PersonalUser.findOne({userName : username});
    const {message} = user;
    message.splice(index , 1);
    const result = await PersonalUser.updateOne({userName : username} , {$set: {"message" : message}});
    res.status(200).json({status:'success' , message:'delete record' , data:user})
  }
}
