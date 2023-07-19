const { User } = require("./../DB_connection");

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            throw new Error("faltan datos")
        } 
        const user = await User.findOrCreate({
            where: {
                email,
                password
            }
        })
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = postUser;