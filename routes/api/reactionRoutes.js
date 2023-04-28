const express = require('express');
const router = express.Router();
const { getSingleReaction } = require('../../controllers/reaction');
const { createReaction } = require('../../controllers/reaction');
const { getReactions } = require('../../controllers/reaction');
// const { putReaction } = require('../../controllers/Reaction');
// const { deleteReaction } = require('../../controllers/Reaction');
router.get('/:id', getSingleReaction);
router.post('/', createReaction);
router.get('/', getReactions);
// router.put('/:id', putReaction);
// router.delete('/:id', deleteReaction);


module.exports = router;
