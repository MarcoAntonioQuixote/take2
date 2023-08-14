const express = require('express');
const playerRouter = express.Router();
const {Player, Pet} = require('../models/associations');

playerRouter.get('/:id', async (req,res) => {
    let {id} = req.params;
    console.log(`Searching for player ${id}`);
    let player = await Player.findByPk(id, {include: Pet});
    res.json(player);
})

module.exports = playerRouter;
