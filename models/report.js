'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Occur = new Schema({
	amount : String
});

let Report = new Schema({
	ticker : String,
	openSellPrice : String,
	targetBuyPrice : String,
	targetPercent : String,
	increaseAmt : String,
	occurs : [Occur],
	dateRecorded : {type: Date, default: Date.now}
});

module.exports = Report = mongoose.model('Report', Report);
