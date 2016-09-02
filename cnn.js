const newsTool = require('./newsTool.js');
const category = require('./category.js');

const travel = category.travel;
const money = category.money;
newsTool.getNews([travel,money]);
