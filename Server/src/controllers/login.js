const { User } = require("./../DB_connection")

const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        if(!email || !password){
            throw new Error("faltan datos")
        }
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        if(!user) {
            return res.status(404).send("usuario no encontrado")
        } 
        if(user.password === password){
            return res.status(200).json({ access: true })
        } else {
            return res.status(403).send("contrasena incorrecta")
        }
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


module.exports = login;