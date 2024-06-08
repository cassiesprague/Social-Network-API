// https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

// Imports schema and model from mongoose
const { Schema, model } = require('mongoose');

// Defines new mongoose schema for fields called username, email, thoughts, and friends
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
        },
    ],
        toJSON: {
            getters: true,
        },
    }
);

// Defines virtual property friend count which calculates number of friends a user has based on the length of the friends array
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

// Creates user model based on userschema
const User = model('user', userSchema);

// Exports user model
module.exports = User;