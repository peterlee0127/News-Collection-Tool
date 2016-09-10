const newsTool = require('./newsTool.js');
const category = require('./category.js');

const travel = category.travel;
const money = category.money;
const entertainment = category.entertainment;
const sport = category.sport;
const tech = category.tech;
const health = category.health;

newsTool.getNews([travel,money,entertainment,sport,tech,health]);
