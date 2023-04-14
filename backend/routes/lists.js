const express = require('express')
const router = express.Router()
const {
        getitems,
        getItem,
        addItem,
} = require('../contollers/listController')


// Get all items.
router.get('/', getitems)

// Get a single item.
router.get('/:id', getItem)

// Add to todo list.
router.post('/', addItem)

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