import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    rolse: {
        type: String,
        enum: ["user","admin"], //select only from these
        default: "user" // this is default selected choice
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    resetPasswordToken: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },
}, {
    timestamps: true,
    }
);



const User = mongoose.model("User", userSchema)
//we do not write Name e.g. "User" here

export default User;