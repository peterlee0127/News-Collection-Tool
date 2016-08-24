
const money = {
        url:'http://rss.cnn.com/rss/money_news_international.rss',
        format:'div[id=storytext] p'
}
const travel = {
        url:"http://rss.cnn.com/rss/edition_travel.rss",
        format:"div[class=pg-rail-tall__body] div[class=zn-body__paragraph]"
}

module.exports = {
    money,travel
};
