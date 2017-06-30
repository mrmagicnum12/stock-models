'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StockAnalyze = new Schema({
	ticker : String,
	last : String,
	percentage : String,
	dateAdded : {type: Date, default: Date.now}
})

module.exports = StockAnalyze = mongoose.model('StockAnalyze', StockAnalyze);
