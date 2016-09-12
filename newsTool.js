const xmlParseString = require('xml2js').parseString;

const network = require('./network.js');
const fs = require('fs');

require('events').EventEmitter.prototype._maxListeners = 1000000;

function parseCategory(text,callback) {
    xmlParseString(text, function (err, result) {
        var resultArray = [];
        var allItem = result.rss.channel[0].item;
        for(var i=0;i<allItem.length;i++) {
            var item = allItem[i];
            var dict = {};
            dict.title = item.title[0];
            dict.link = item.link[0];
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
        var arr = item.split("-");
        if(arr.length>1){
            dict.title = arr[0];
            dict.date = arr[1];
        }else {
            dict.title = arr[0];
        }
    });
    dict.url = url;
    if(result.length>0){
        if(contentArray.length==result.length) {
            var temp = [];
            for(var i=0;i<contentArray.length;i++){
                if(!contentArray[i].includes("READ:") && !contentArray[i].includes("A version of this article")){
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
        const cate = categoryArray[i];
        setTimeout(down,i*10000,cate);
    }
}
function down(cate) {
    console.log(cate.name);
    network.download(cate.url,function(category) {
        parseCategory(category,function(categoryList){
            categoryList.forEach(function(item,index) {
                setTimeout(downloadContent,100*index,cate,item);
            });
        });
    });
}

function downloadContent(cate,item) {
    const url = item.link;
    network.download(url,function(content){
        parseContent(cate,url,content,function(result){
                var title = result.title;
                title = title.replace('‘','').replace(':','').replace('/','');
                var crypto = require('crypto');
                var hash = crypto.createHash('md5').update(title).digest('hex');
                var filename = "data/"+cate.name+"/"+hash+".txt";
                fs.writeFile(filename,result.content);
                // console.log("---------\n");
        });
    });
}


exports.getNews = getNews;
