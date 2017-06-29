'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Stock = new Schema({
	ticker : String,
	high : String,
	low : String,
	average: String,
	watch : Boolean
})

module.exports = Stock = mongoose.model('Stock', Stock);
