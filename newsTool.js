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
        var rep = new RegExp(/\W+/,'g');
        item = item.replace(rep," ");
        if(item!="BBC News"){
            dict.title = item;
        }
    });
    console.log("\t"+title);
    dict.url = url;
    if(result.length>0){
        if(contentArray.length==result.length) {
            var temp = [];
            for(var i=0;i<contentArray.length;i++){
                if(!contentArray[i].includes("Media playback") && !contentArray[i].includes("READ:") &&  !contentArray[i].includes("Follow us on") && !contentArray[i].includes("A version of this article")){
                    temp.push(contentArray[i]);
                }
            }
            temp = temp.join(" ")
            dict.content = temp;
            callback(dict);
        }
    }
}


var news = [];
function addCategory(categoryArray){
    for(var i=0;i<categoryArray.length;i++){
          const cate = categoryArray[i];
        news.push(cate);
    }
}

function start() {
  for(var i=0;i<news.length;i++){
      const cate = news[i];
      setTimeout(down,i*15000,cate);
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
                var filename = "data/"+cate.name+"/"+title+".txt";
                fs.writeFile(filename,result.content,function(){});
        });
    });
}


exports.addCategory = addCategory;
exports.start = start;
