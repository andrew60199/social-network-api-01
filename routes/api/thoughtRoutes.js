const router = require('express').Router()
// Require the models
const { User, Thought } = require('../../models')
const reactionSchema = require('../../models/Reaction')

// api/thoughts

// Routes for thoughts
router.get('/', async (req, res) => {
    try {

        const allThoughts = await Thought.find()

        res.status(200).json(allThoughts)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

router.get('/:id', async (req, res) => {
    try {

        const thought = await Thought.findOne({ _id: req.params.id })

        res.status(200).json(thought)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }    
})

router.post('/new', async (req, res) => {
    try {

        const thought = await Thought.create(req.body)

        // Add the thoughts id to the users thought array
        const addThoughtToUser = await User.findOneAndUpdate(
            { username: req.body.username },
            { $addToSet: { thoughts: thought._id }},
            {new: true, runValidators: true}
        )

        res.status(201).json({ message: "Thought added!" })

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }   
})

router.put('/:id', async (req, res) => {
    try {

        const editThought = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {new: true, runValidators: true}
        )
        
        res.status(200).json(editThought)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {

        const deletedThought = await Thought.findOneAndDelete({ _id: req.params.id })

        res.status(200).json(deletedThought)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

// Routes for thoughts reactions
router.post('/:thoughtId/reactions', async (req, res) => {
    // add to the model and since we linked it previously it will create itself

    try {

        const addReaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
            {new: true, runValidators: true}
        )
        
        res.status(200).json(addReaction)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }    
})

router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {

        const removeReaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId }}},
            {new: true, runValidators: true}
        )

        res.status(200).json(removeReaction)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

module.exports = router