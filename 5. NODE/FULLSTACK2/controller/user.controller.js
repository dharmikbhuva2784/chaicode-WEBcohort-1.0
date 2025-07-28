const registerUser = async (req,res) => {
    res.send("registered");
};

const userLogin = async (req,res) => {
    res.send("Logged in Successfully");
};

const resetPassword = async (req,res) => {
    res.send("Password reset successfully");
};

export { registerUser };
export { userLogin };
export { resetPassword };