const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
       type: String, 
       required: true
      },
    email: {
       type: String, 
       required: true
      },
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

userSchema
  .virtual('fullName')
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

const User = model('user', userSchema);

module.exports = User;
