const router = require('express').Router()
// Require the models

// Routes for a user specifically
router.get('/', (req, res) => {
    
})

router.get('/:id', (req, res) => {
    
})

router.post('/new-user', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

// Routes for a users friends
router.post('/:userId/friends/:friendId', (req, res) => {
    
})

router.delete('/:userId/friends/:friendId', (req, res) => {
    
})

module.exports = router