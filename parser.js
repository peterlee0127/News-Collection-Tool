const xmlParseString = require('xml2js').parseString;

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
    if(result.length>0){
        if(contentArray.length==result.length) {
            var temp = [];
            for(var i=0;i<contentArray.length;i++){
                if(!contentArray[i].includes("READ:")){
                    temp.push(contentArray[i]);
                }
            }
            callback(url,temp);
        }
    }
}

exports.parseCategory = parseCategory;
exports.parseContent = parseContent;
