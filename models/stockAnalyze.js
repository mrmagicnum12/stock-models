'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StockAnalyze = new Schema({
	ticker : String,
	last : {type : Number, index : true},
	timeStamp : {type : Date, default: Date.now}
})
.index({last:1})

module.exports = StockAnalyze = mongoose.model('StockAnalyze', StockAnalyze);
