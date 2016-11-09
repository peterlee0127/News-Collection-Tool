const newsTool = require('./../newsTool.js');
const category = require('./../category.js');

const money = category.bbc_money;
const entertainment = category.bbc_entertainment;
const sport = category.bbc_sport;
const tech = category.bbc_tech;
const health = category.bbc_health;
const politics = category.bbc_politics;

newsTool.getNews([sport,entertainment,politics,health,tech,money]);
