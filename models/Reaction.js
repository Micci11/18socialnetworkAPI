// Import required modules from mongoose and moment
const mongoose = require("mongoose");
const moment = require("moment");

// Define the reaction schema
const reactionSchema = new mongoose.Schema(
  {
    // Define the reactionId field
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
       // Generates a new ObjectId by default for each reaction
      default: () => new mongoose.Types.ObjectId(),
    },
    // Define the reactionBody field
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    // Define the username field
    username: {
      type: String,
      required: true,
    },
    // Define the createdAt field with custom getter
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        return moment(timestamp).format("MMM DD, YYYY [at] hh:mm a");
      },
    },
  },
  {
    // Define the getters option for toJSON
    toJSON: {
      getters: true,
    },
    // Disable the id field
    id: false,
  }
);

// Create the Reaction model using the reaction schema
module.exports = mongoose.model("Reaction", reactionSchema);

