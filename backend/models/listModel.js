const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ListSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
      }
}, {timestamps: true})

module.exports = mongoose.model('List', ListSchema)