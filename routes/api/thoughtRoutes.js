const router = require('express').Router()
// Require the models
const { User, Thought } = require('../../models')

// Routes for thoughts
router.get('/', async (req, res) => {
    try {


    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

router.get('/:id', (req, res) => {
    
})

router.post('/new-thought', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

// Routes for thoughts reactions
router.post('/:thoughtId/reactions', (req, res) => {
    
})

router.delete('/:thoughtId/reactions', (req, res) => {
    
})

module.exports = router