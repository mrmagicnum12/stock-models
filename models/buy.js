'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Buy = new Schema({
	created_at : String,
	id : String,
	ticker : String,
	strategy : {type : Schema.Types.ObjectId, ref : 'BuyStrategy'}
});

module.exports = Buy = mongoose.model('Buy', Buy);
