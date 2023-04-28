const { Thoughts } = require('../models');

 // Get all thoughts
  const getThoughts = async (req, res) => {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  };
  // Get a thought
  const getThoughtbyId = async (req, res) => {
    try {
      const thought = await Thoughts.findById(
        { _id: req.params.id },
      );
      if (!thought) {
        return res.status(404).json({ msg: 'thought not found' });
      }
      res.status(200).json({ thought });
    } catch (error) {
      res.status(500).send('Server error');
    }
  };
  // Create a thought
  const postThought= async (req, res) => {
    const { thoughtText, createdAt, username, reactions } = req.body;
    try {
      const thought = await Thoughts.create({
        thoughtText,
        createdAt,
        username,
        reactions,
      });
      res.status(201).json({ thought });
    } catch (error) {
      res.status(500).send('Server error');
    }
  };
//   // Delete a thought
 const deleteThought = async (req, res) => {
  try {
    const thought = await Thoughts.findByIdAndDelete(req.params.id);
    if (!thought) {
      return res.status(404).json({ msg: 'thought not found' });
    }
    res.status(200).json({ msg: 'thought deleted successfully' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

 const putThought = async (req, res) => {
  try {
    const thought = await Thoughts.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ msg: 'thought not found' });
    }
    res.status(200).json({ thought });
  } catch (error) {
    res.status(500).send('Server error');
  }
};


// const postReaction= async (req, res) => {
//   const { ReactionText, createdAt, username, reactions } = req.body;
//   try {
//     const reaction = await Reactions.create({
//       ReactionText,
//       createdAt,
//       username,
//       reactions,
//     });
//     res.status(201).json({ reaction });
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };

  // addReaction(req, res) {
  //   Application.findOneAndUpdate(
  //     { _id: req.params.applicationId },
  //     { $addToSet: { reactions: req.body } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((application) =>
  //       !application
  //         ? res.status(404).json({ message: 'No application with this id!' })
  //         : res.json(application)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // };
  // // Remove application reaction. This method finds the application based on ID. It then updates the reactions array associated with the app in question by removing it's reactionId from the reactions array.
  // removeReaction(req, res) {
  //   Thoughts.findOneAndUpdate(
  //     { _id: req.params.thoughtId },
  //     { $pull: { reactions: { reactionId: req.params.reactionId } } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((thought) =>
  //       !thought
  //         ? res.status(404).json({ message: 'No thought with this id!' })
  //         : res.json(thought)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // };


module.exports = {
  getThoughts,
  getThoughtbyId,
  postThought,
  deleteThought,
  putThought
 };

