'use strict';

var models = {
	Stock: require('./models/stock'),
	StockAnalyze: require('./models/stockAnalyze'),
	Report: require('./models/report'),
	RobinHood: require('./models/robinHood'),
	StockAnalyzeReport: require('./models/stockAnalyzeReport'),
	BuyStrategy: require('./models/buyStrategy')
};

module.exports = models;
