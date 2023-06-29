// Import required modules from mongoose
const { Schema, model, Types } = require('mongoose');

// Define the user schema
const userSchema = new Schema(
  {
    // Define the username field
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // Define the email field
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please use a valid email address",
      ],
    },
    // Define the thoughts array field
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // Define the friends array field
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // Define the virtuals option for toJSON
    toJSON: {
      virtuals: true,
    },
    // Disable the id field
    id: false,
  }
);

// Define the virtual property friendCount
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the User model using the user schema
const User = model('User', userSchema);

// Export the User model
module.exports = User;
