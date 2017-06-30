'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RobinHood = new Schema({
	ticker : String,
	description : String,
	url : String,
	dateRecorded : {type : Date, default : Date.now}
});

module.exports = RobinHood = mongoose.model('RobinHood', RobinHood);
