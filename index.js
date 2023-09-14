require('dotenv').config();
const server = require ('./app');
const dbConnect = require('./db');
const { PORT } = process.env;

server.listen(PORT, () => {
    console.log(`listening at ${PORT}`);
})

dbConnect();

