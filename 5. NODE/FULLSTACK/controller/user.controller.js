import User from "../model/User.model.js";

const registerUser = async(req,res) => {
        
        const { name, email, password } = req.body;
        
        if(!name || !email || !password){
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        try {
            const existingUser = User.findOne({email})
            if(existingUser){

            }
        } catch (error) {
            
        }
};


export { registerUser };