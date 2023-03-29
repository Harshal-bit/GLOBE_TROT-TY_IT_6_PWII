const smallTileModel = require('../models/smallTile.model')


exports.getSmallTile = async (req,res) => {
    const smallTile  = await smallTileModel.find();
    console.log("logging smallTile Collection: " +smallTile);
    res.send(smallTile);
};

exports.getSmallTileById = async (req,res) => {
    const smallTile  = await smallTileModel.findById(req.params.id);
    res.send(smallTile);
};

exports.createSmallTile = async (req,res) =>{
    const smallTile = new smallTileModel({
        name:req.body.name,
        img:req.body.name,
        distance:req.body.name,
    })
    await smallTile.save();
    res.send(smallTile);
};

