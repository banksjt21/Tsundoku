/*  ===========================================================================
//  book.js
//  ===========================================================================
//  - Creates the model schema
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
const mongoose = require('mongoose');




/*  ===========================================================================
//  SCHEMA
//  =======================================================================  */
const Schema     = mongoose.Schema;
const bookSchema = new Schema(
    {
        title:        { type: String, required: true },
        description:  { type: String, },
        author:      [{ type: String }],
        year:         { type: String },
        category:     { type: String },
        image:        { type: String },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Book', bookSchema);