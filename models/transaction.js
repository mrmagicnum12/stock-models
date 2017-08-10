'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Transaction = new Schema({
	ticker : String,
	buy : Number,
	sell : Number,
	profit : Number,
	strategy : {type : Schema.Types.ObjectId, ref : 'BuyStrategy'},
	created : {type : Date, default : Date.now}
});

module.exports = Transaction = mongoose.model('Transaction', Transaction);
