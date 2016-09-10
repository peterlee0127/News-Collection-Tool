
const money = {
        name:"money",
        url:'http://rss.cnn.com/rss/money_news_international.rss',
        format:'div[id=storytext] p'
}
const travel = {
        name:"travel",
        url:"http://rss.cnn.com/rss/edition_travel.rss",
        format:"div[class=pg-rail-tall__body] div[class=zn-body__paragraph]"
}

const entertainment = {
        name:"entertainment",
        url:"http://rss.cnn.com/rss/cnn_showbiz.rss",
        format:"div[class=zn-body__paragraph]"
}

const sport = {
        name:"sport",
        url:"http://rss.cnn.com/rss/edition_sport.rss",
        format:"div[class=zn-body__paragraph]"
}

const tech = {
        name:"tech",
        url:"http://rss.cnn.com/rss/cnn_tech.rss",
        format:"div[id=storytext] p"
}

const health = {
        name:"health",
        url:"http://rss.cnn.com/rss/cnn_health.rss",
        format:"div[class=zn-body__paragraph]"
}

module.exports = {
    money,travel,entertainment,sport,tech,health
};
