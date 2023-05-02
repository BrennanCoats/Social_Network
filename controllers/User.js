const { Thoughts, User } = require('../models');


  // Get all thoughts
  const getUsers = async (req, res) => {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  };
  // Get a thought
  const getUserbyId = async (req, res) => {
    try {
      const user = await User.findById(
        { _id: req.params.id },
      );
      if (!user) {
        return res.status(404).json({ msg: 'user not found' });
      }
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).send('Server error');
    }
  };
  // Create a thought
  const postUser= async (req, res) => {
    const { username, email, friends, thoughts } = req.body;
    try {
      const user = await User.create({
        username,
        email,
        friends,
        thoughts,
      });
      res.status(201).json({ user });
    } catch (error) {
      res.status(500).send('Server error');
    }
  };
//   // Delete a thought
 const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'user not found' });
    }
    res.status(200).json({ msg: 'user deleted successfully' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

 const putUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ msg: 'user not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Add friend
const addFriend = async (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friends: req.params.friendId } },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
};
// Remove friend
const removeFriend = async (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userId},
    { $pull: { friends: req.params.friendId } },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getUsers,
  getUserbyId,
  postUser,
  putUser,
  deleteUser,
  addFriend,
  removeFriend
 };
