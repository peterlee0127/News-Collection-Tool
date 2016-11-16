const newsTool = require('./newsTool.js');
const category = require('./category.js');

newsTool.addCategory([category.bbc_money,
                  category.bbc_entertainment,
                  category.bbc_sport,
                  category.bbc_tech,
                  category.bbc_health,
                  category.bbc_politics]);


newsTool.addCategory([category.cnn_travel,
                      category.cnn_money,
                      category.cnn_entertainment,
                      category.cnn_sport,
                      category.cnn_tech,
                      category.cnn_health,
                      category.cnn_politics]);

newsTool.addCategory([category.newyork_tech,
                      category.newyork_entertainment,
                      category.newyork_politics,
                      category.newyork_sport,
                      category.newyork_health,
                      category.newyork_travel,
                      category.newyork_money
                      ]);

newsTool.start();
