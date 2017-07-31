'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sell = new Schema({
	created_at : String,
	id : String,
	ticker : String
});

module.exports = Position = mongoose.model('Sell', Sell);
