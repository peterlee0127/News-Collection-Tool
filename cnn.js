const parser = require('./parser.js');
const network = require('./network.js');
const category = require('./category.js');

// const url = "http://rss.cnn.com/rss/money_news_international.rss";
// const url = "http://rss.cnn.com/rss/edition_travel.rss";

const cate = category.travel;

network.download(cate.url,function(category) {
    var list = parser.parseCategory(category,function(categoryList){
        categoryList.forEach(function(item,index) {
            const url = item.link;
            network.download(url,function(content){
                parser.parseContent(cate,url,content,function(link,result){
                        console.log(link);
                        console.log(result);
                        console.log("---------")
                });
            });
        });
        // for(var i=0;i<categoryList.length;i++){

        // }
    });
});
