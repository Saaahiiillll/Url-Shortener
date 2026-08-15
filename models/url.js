const mongoose=require("mongoose")

const urlSchema=new mongoose.Schema({
    shortId:{
        type: String,
        require:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        require:true,
    },
    visitHistory:[{ timestamp:{type:Number}}],

    role:{
        type:String,
        default:"NORMAL",
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    }
},{timestamps:true});

const URL= mongoose.model("url",urlSchema);
module.exports=URL;