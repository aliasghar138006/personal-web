import { Schema , model , models } from "mongoose";

const personalSchema = new Schema({
    fullName : {
        type:String,
        default:'نام و نام خانوادگی'
    },
    city:{
        type:String,
        default:'تهران'
    },
    email: {
        type:String,
        default:'test@test.com'
    },
    userName : {
        type:String,
        require:true
    },
    password: {
        type:String,
        require : true
    },
    shortDescription : {
        type : String,
        default : 'معرفی کوتاه'
    },
    image : {
        type:String,
    },
    descriptions : {
        type: String,
        default : 'معرفی کامل'
    },
    skills : {type:Array},
    educations : {type:Array},
    experience: {type:Array},
    documents: {type:Array},
    commendations : {type:Array},
    simples : {type:Array},
    courses : {type:Array},
    createAt : {
        type:Date,
        default : () => Date.now(),
        immutable : true
    },
    updateAt : {
        type : Date,
        default : () => Date.now(),
        immutable : false
    }
})


const PersonalUser = models.PersonalUser || model('PersonalUser' , personalSchema)

export default PersonalUser;