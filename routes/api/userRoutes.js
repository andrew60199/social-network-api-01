const router = require('express').Router()
// Require the models
const { User, Thought } = require('../../models')

// Routes for a user specifically
router.get('/', async (req, res) => {
    try {

        const allUsers = await User.find()
        // console.log(allUsers)

        res.status(200).json(allUsers)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        
        // Populate with their thoughts and friends
        const user = await User.findOne({ _id: req.params.id })
            .populate('friends')
            .populate('thoughts')

        // console.log(user)

        res.status(200).json(user)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

router.post('/new', async (req, res) => {
    try {

        const newUser = await User.create(req.body)
        // console.log(newUser)
        
        res.status(201).json(newUser)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

router.put('/:id', async (req, res) => {
    try {

        const editUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {new: true, runValidators: true}
        )
        
        res.status(200).json(editUser)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {

        const deletedUser = await User.findOneAndDelete({ _id: req.params.id })

        res.status(200).json(deletedUser)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

// Routes for a users friends
router.post('/:userId/friends/:friendId', async (req, res) => {
    try {

        const addFriend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId }},
            {new: true, runValidators: true}
        )

        res.status(200).json(addFriend)

        // What about the other person. Shouldn't they be friend back?
        // Or maybe this is a following type situation 

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

router.delete('/:userId/friends/:friendId', async (req, res) => {
    try {

        const removeFriend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId }},
            {new: true, runValidators: true}
        )

        res.status(200).json(removeFriend)

    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

module.exports = router