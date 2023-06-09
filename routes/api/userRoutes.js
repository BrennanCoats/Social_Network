const express = require('express');
const router = express.Router();
const { getUserbyId } = require('../../controllers/User');
const { postUser } = require('../../controllers/User');
const { getUsers } = require('../../controllers/User');
const { putUser } = require('../../controllers/User');
const { deleteUser } = require('../../controllers/User');
const { addFriend } = require('../../controllers/User');
const { removeFriend } = require('../../controllers/User');

router.get('/:id', getUserbyId);
router.post('/', postUser);
router.get('/', getUsers);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:userId/friends/:friendId').delete(removeFriend);


module.exports = router;
