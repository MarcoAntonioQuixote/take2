const express = require('express');
const cors = require('cors');
const { testConnection, sequelize } = require('./connection');
const { fullLoad, syncTables } = require('./models/initialSetUp');
const playerRouter = require('./routers/playerRouter');
const app = express();
const port = 8000;

testConnection();

app.use(cors());
app.use(express.json());

app.use('/player', playerRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})