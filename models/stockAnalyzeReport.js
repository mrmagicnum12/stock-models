'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StockAnalyzeReport = new Schema({
	analyticType : String,
	type: String,
	hour: Number,
	day: String,
	price: Number,
	dateRecorded: {type:Date, default: Date.now}
})

module.exports = StockAnalyzeReport = mongoose.model('StockAnalyzeReport', StockAnalyzeReport);
