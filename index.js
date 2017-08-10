'use strict';

var models = {
	Stock: require('./models/stock'),
	StockAnalyze: require('./models/stockAnalyze'),
	Report: require('./models/report'),
	RobinHood: require('./models/robinHood'),
	StockAnalyzeReport: require('./models/stockAnalyzeReport'),
	BuyStrategy: require('./models/buyStrategy'),
	Sell: require('./models/sell'),
	Buy: require('./models/buy'),
	Transaction: require('./models/buy')
};

module.exports = models;
