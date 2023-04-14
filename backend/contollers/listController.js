const List = require('../models/listModel')
const mongoose = require('mongoose')

// Get all items.
const getitems = async (req,res)=>{
    const items = await List.find({}).sort({createdAt: -1})
    res.status(200).json(items)
}

// Get a single item.
const getItem = async (req,res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: "Item not found."})

    const item = await List.findById(id)
    if(!item) return res.status(404).json({error: "Item not found."})
    return res.status(200).json(item)
}
// Add to todo list.
const addItem = async (req,res)=>{
    const {title, description} = req.body
    try{
            const list = await List.create({title, description})
            res.status(200).json(list)
    } catch(err){
            res.status(400).json({error: err.message})
    }
}
// Delete a single item.
// Update a single item.

module.exports = {
    getitems,
    getItem,
    addItem
}