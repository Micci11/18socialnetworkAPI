// Import required modules from mongoose
const { Schema, model, Types } = require('mongoose');

// Define the thought schema
const thoughtSchema = new Schema(
  {
    // Define the _id field
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    // Define the thoughtText field
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    // Define the createdAt field
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // Define the username field
    username: {
      type: String,
      required: true,
    },
    // Define the reactions array field
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  },
  {
    // Define the virtuals and getters options for toJSON
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // Disable the id field
    id: false,
  }
);

// Define the virtual property reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create the Thought model using the thought schema
const Thought = model('Thought', thoughtSchema);

// Export the Thought model
module.exports = Thought;


