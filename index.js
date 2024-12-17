const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./src/Routes/index');

const { user } = require('./src/models/index')

const db = require('./src/models/index');

const app = express();


const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(process.env.PORT, async () => {
        console.log(`Server Started on Port: ${process.env.PORT}`);
        if (process.env.DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }
    });
}

prepareAndStartServer();

