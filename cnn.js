const parser = require('./parser.js');
const network = require('./network.js');
const category = require('./category.js');

const cate = category.travel;

network.download(cate.url,function(category) {
    var list = parser.parseCategory(category,function(categoryList){
        categoryList.forEach(function(item,index) {
            const url = item.link;
            network.download(url,function(content){
                parser.parseContent(cate,url,content,function(link,result){
                        console.log(link);
                        // console.log(result);
                        console.log("---------")
                });
            });
        });
    });
});
