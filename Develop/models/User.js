const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create User model
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
   
    reactions: [reactionSchema],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
