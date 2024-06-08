// Imports schema from mongoose
const { Schema } = require('mongoose');

// Defines new mongoose schema for fields called reasction id, reaction body, username, and created at
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleDateString()
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// Exports reaction schema
module.exports = reactionSchema;