const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: { 
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: { 
      type: Date, 
      required: true,
      maxlength: 280,
    },

    username: { 
      type: String, 
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Reactions = model('reactions', reactionSchema);

module.exports = Reactions;