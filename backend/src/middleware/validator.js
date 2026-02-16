const validateUser = (req, res, next) => {
    const { name, age, email, account, sex, phonenumber } = req.body;

    if (!name || !age || !email || !account || !sex || !phonenumber) {
        return res.status(400).json({ 
            status: "Error", 
            message: "All fields (name, age, email, account, sex, phonenumber) are required" 
        });
    }
    next();
};

module.exports = { validateUser };