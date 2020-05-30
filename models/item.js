const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    name: String,
    date:{
        type:Date,
        default: Date.now()
    }

})

module.exports = Item = mongoose.model('item', ItemSchema)