import PersonalUser from "models/PersonalUser";
import Connect from "utils/connectDB";


export default async function handler(req , res){
    if(req.method !== 'POST') return;

    const {form:{title , fullName , email} , content} = req.body;

    if(!title || !fullName || !email || !content){
        return res.status(422).json({status:'failed' , message:'invalid data!'})
    }

    await Connect();

    const userName = process.env.NEXT_PUBLIC_USERNAME;

    const user = await PersonalUser.findOne({userName : userName});

    if(!user){
        return res.status(401).json({status:'failed' , message:'user Not found!'})
    }

    user.message = [...user.message , {fullName , email , title , content}];
    user.save();

    res.status(200).json({status:'success' , message:'saved message' , data : user});

}