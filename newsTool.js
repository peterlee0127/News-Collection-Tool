const xmlParseString = require('xml2js').parseString;

const network = require('./network.js');

function parseCategory(text,callback) {
    xmlParseString(text, function (err, result) {
        var resultArray = [];
        var allItem = result.rss.channel[0].item;
        for(var i=0;i<allItem.length;i++) {
            var item = allItem[i];
            var dict = {};
            dict.title = item.title[0];
            dict.link = item.link[0];
            dict.pubDate = item.pubDate[0];
            resultArray.push(dict);
        }
        callback(resultArray);
    });
}

const cheerio = require('cheerio');

function parseContent(category,url,content,callback) {
    let $ = cheerio.load(content);
    var contentArray = [];
    var format = category.format;
    let result = $(format).each(function(i, elem) {
        var item = $(this).text();
        contentArray.push(item) ;
    });

    var dict = {};
    let title = $('title').each(function(i, elem) {
        var item = $(this).text();
        dict.title = item;
    });
    dict.url = url;
    if(result.length>0){
        if(contentArray.length==result.length) {
            var temp = [];
            for(var i=0;i<contentArray.length;i++){
                if(!contentArray[i].includes("READ:")){
                    temp.push(contentArray[i]);
                }
            }
            temp = temp.join(" ")
            dict.content = temp;
            callback(dict);
        }
    }
}

function getNews(categoryArray){
    for(var i=0;i<categoryArray.length;i++){
        var cate = categoryArray[i];
        network.download(cate.url,function(category) {
            parseCategory(category,function(categoryList){
                categoryList.forEach(function(item,index) {
                    downloadContent(cate,item);
                });
            });
        });
    }
}

function downloadContent(cate,item) {
    const url = item.link;
    network.download(url,function(content){
        parseContent(cate,url,content,function(result){
                console.log(result);
                console.log("---------\n");
        });
    });
}


exports.getNews = getNews;
