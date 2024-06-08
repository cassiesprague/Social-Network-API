// Imports schema and model from mongoose
const { Schema, model } = require('mongoose');

// Defines new mongoose schema for fields called thought text, created at, useranem
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlenght: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions:[reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// Defines virtual property reaction count which calculates number of reactions a user has based on the length of the reactions array
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

// Creates thought model based on thoughtschema
const Thought = model('thought', thoughtSchema);

// Exports thought model
module.exports = Thought;