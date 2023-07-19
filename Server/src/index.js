const express = require("express");
const server = express();
const PORT = 3001;
const { router } = require("./routes/index");
const { sequelize } = require('./DB_connection');

server.use(express.json())

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use("/rickandmorty", router);

async function main () {
    try {
        await sequelize.sync({force: false})
        server.listen(PORT, () => {
            console.log("servidor en linea en el puerto:", PORT);
        });
    } catch (error) {
        console.log(error)
    }
}


main();
