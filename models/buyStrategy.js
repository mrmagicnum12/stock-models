'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BuyStrategy = new Schema({
	ticker : String,
	shares : {type: Number, default:0},
	price : Number,
	targetSalePrice : Number,
	created : {type : Date, default : Date.now}
})

module.exports = BuyStrategy = mongoose.model('BuyStrategy', BuyStrategy);
