'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Report = new Schema({
	ticker : String,
	low : Number,
	high : Number,
	average : Number
})

let StockAnalyzeReport = new Schema({
	analyticType : String,
	type: String,
	hour: Number,
	day: String,
	report: [Report],
	dateRecorded: {type:Date, default: Date.now}
})

module.exports = StockAnalyzeReport = mongoose.model('StockAnalyzeReport', StockAnalyzeReport);
