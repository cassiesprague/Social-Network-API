const { User } = require('../models');

module.exports = {
    // Get all usere
    async users(req, res) {
        try {
            const users = await users.find()
            res.json(courses);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get one user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create user
    async createUser(req, res) {
        try {
            const user = await user.create(req.body);
            res.json(course);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Delete user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

// Exports UserController
module.exports = UserController;
