const newsTool = require('./newsTool.js');
const category = require('./category.js');

const travel = category.cnn_travel;
const money = category.cnn_money;
const entertainment = category.cnn_entertainment;
const sport = category.cnn_sport;
const tech = category.cnn_tech;
const health = category.cnn_health;
const politics = category.cnn_politics;

newsTool.getNews([politics,travel,money,entertainment,sport,tech,health]);
