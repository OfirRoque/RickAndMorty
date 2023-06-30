let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites);
}


const deleteFav = (req, res) => {
    const filter = myFavorites.filter(e => e.id !== req.params.id);
    myFavorites = filter;
    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}