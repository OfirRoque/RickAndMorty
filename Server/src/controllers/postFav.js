const { Favorite } = require("./../DB_connection")

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body;
        if(!id || !name || !origin || !status || !image || !species || !gender){
            throw new Error("Faltan datos");
        }
        if(id && name && origin && status && image && species && gender){
            await Favorite.findOrCreate({
                where: {
                    id,
                    name,
                    origin,
                    status,
                    image,
                    species,
                    gender
                }
                })
            const allFav = await Favorite.findAll()

            return res.status(200).json(allFav);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = postFav;