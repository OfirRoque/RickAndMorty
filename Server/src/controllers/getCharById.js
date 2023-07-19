
const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");


const getCharById = async (req, res) => {
    /* axios.get(`${URL}/${id}`)
    .then(response => response.data)
    .then(({id, status, name, species, origin, image, gender}) => {
        if(name){
            const character = {
                id,
                status,
                name,
                species,
                origin,
                image,
                gender
            }
            return res.status(200).json(character);
        }
        return res.status(404).send("Not found")
    })
    .catch(error => res.status(500).send(error.message)) */
    try {
        const { id } = req.params; 
        const { data } = await axios(`${URL}/${id}`);
        if(!data.name) throw new Error("Not found");

        const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender
        }
        return res.status(200).json(character)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports= {
    getCharById
}