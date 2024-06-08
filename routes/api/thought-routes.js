// Imports ontrollers and dependencies
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// Define routes for GET and POST all Thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Define routes for GET, PUT and DELETE Thoughts
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// Define route for POST reaction to a Thought
router.route('/:thoughtId/reactions').post(createReaction);

// Define route for DELETE reaction to a Thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Exports router
module.exports = router;