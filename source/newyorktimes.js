const newsTool = require('./../newsTool.js');
const category = require('./../category.js');

const tech = category.newyork_tech;
const entertainment = category.newyork_entertainment;
const politics = category.newyork_politics;
const sport = category.newyork_sport;
const health = category.newyork_health;
const travel = category.newyork_travel;
const money = category.newyork_money;

newsTool.getNews([money,tech,entertainment,politics,sport,health,travel]);
