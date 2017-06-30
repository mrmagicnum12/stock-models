'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StockAnalyze = new Schema({
	ticker : String,
	last : Number,
	timeStamp : Date
})

module.exports = StockAnalyze = mongoose.model('StockAnalyze', StockAnalyze);
