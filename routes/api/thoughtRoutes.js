const express = require('express');
const router = express.Router();
const { getThoughtbyId } = require('../../controllers/Thought');
const { postThought } = require('../../controllers/Thought');
const { getThoughts } = require('../../controllers/Thought');
const { putThought } = require('../../controllers/Thought');
const { deleteThought } = require('../../controllers/Thought');
router.get('/:id', getThoughtbyId);
router.post('/', postThought);
router.get('/', getThoughts);
router.put('/:id', putThought);
router.delete('/:id', deleteThought);


module.exports = router;
