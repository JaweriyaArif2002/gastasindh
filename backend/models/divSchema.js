const mongoose = require('mongoose');


const divSchema = new mongoose.Schema({
    divisionName:{
        type: String,
        required:[true, "please! enter division"]
    },
  
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model('Division', divSchema);