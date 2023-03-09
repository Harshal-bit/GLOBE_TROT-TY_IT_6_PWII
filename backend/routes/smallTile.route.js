const path = require('path');
const express = require('express');

const router = express.Router();

const smallTileController = require('../controllers/smallTile.controller');

router.get('/',smallTileController.getSmallTile);
router.get('/:id',smallTileController.getSmallTileById);
router.post('/:id',smallTileController.createSmallTile)

module.exports = router;