const express = require('express')
const router = express.Router()

// Get all items.
router.get('/', (req,res)=>{
        //TODO
        res.json({msg:"Get all items."})
})

// Get a single item.
router.get('/:id', (req,res)=>{
        //TODO
        res.json({msg:"Get a single item."})
})

// Add to todo list.
router.post('/', (req,res)=>{
        //TODO
        res.json({msg:"Add to todo list."})
})

// Delete a single item.
router.delete('/', (req,res)=>{
        //TODO
        res.json({msg:"Delete a single item."})
})

// Update a single item.
router.patch('/', (req,res)=>{
        //TODO
        res.json({msg:"Update a single item."})
})

module.exports = router