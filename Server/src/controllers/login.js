const users = require("./../utils/users")


const login = (req, res) => {
    const email = req.query.email;
    const pass = req.query.password;
    const userFilter = users.filter(e => e.email === email && e.password === pass)
    if(userFilter.length === 0) {
        const obj = {
            access: false
        }
        return res.status(404).json(obj);
    }
    const obj = {
        access: true
    }
    return res.status(200).json(obj);
}



module.exports = {
    login
}