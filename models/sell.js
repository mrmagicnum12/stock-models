'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sell = new Schema({
	created_at : String,
	id : String,
	ticker : String,
	price : String,
	strategy : {type : Schema.Types.ObjectId, ref : 'BuyStrategy'}
});

module.exports = Sell = mongoose.model('Sell', Sell);
