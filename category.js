
//CNN
const cnn_money = {
        name:"money",
        url:'http://rss.cnn.com/rss/money_news_international.rss',
        format:'div[id=storytext] p'
}
const cnn_travel = {
        name:"travel",
        url:"http://rss.cnn.com/rss/edition_travel.rss",
        format:"div[class=pg-rail-tall__body] div[class=zn-body__paragraph]"
}

const cnn_entertainment = {
        name:"entertainment",
        url:"http://rss.cnn.com/rss/cnn_showbiz.rss",
        format:"div[class=zn-body__paragraph]"
}

const cnn_sport = {
        name:"sport",
        url:"http://rss.cnn.com/rss/edition_sport.rss",
        format:"div[class=zn-body__paragraph]"
}

const cnn_politics = {
        name:"politics",
        url:"http://rss.cnn.com/rss/cnn_allpolitics.rss",
        format:"div[class=zn-body__paragraph]"
}

const cnn_tech = {
        name:"tech",
        url:"http://rss.cnn.com/rss/cnn_tech.rss",
        format:"div[id=storytext] p"
}

const cnn_health = {
        name:"health",
        url:"http://rss.cnn.com/rss/cnn_health.rss",
        format:"div[class=zn-body__paragraph]"
}



// New york times

const newyork_tech = {
        name:"tech",
        url:"http://feeds.nytimes.com/nyt/rss/Technology",
        format:"div[class=story-body-supplemental] p"
}
const newyork_entertainment = {
        name:"entertainment",
        url:"http://www.nytimes.com/services/xml/rss/nyt/Arts.xml",
        format:"div[class=story-body-supplemental] p"
}

const newyork_politics = {
        name:"politics",
        url:"http://www.nytimes.com/services/xml/rss/nyt/Politics.xml",
        format:"div[class=story-body-supplemental] p"
}

const newyork_travel = {
        name:"travel",
        url:"http://www.nytimes.com/services/xml/rss/nyt/Travel.xml",
        format:"div[class=story-body-supplemental] p"
}
const newyork_sport = {
        name:"sport",
        url:"http://www.nytimes.com/services/xml/rss/nyt/Sports.xml",
        format:"div[class=story-body-supplemental] p"
}
const newyork_health = {
        name:"health",
        url:"http://www.nytimes.com/services/xml/rss/nyt/Health.xml",
        format:"div[class=story-body-supplemental] p"
}
const newyork_money = {
        name:"money",
        url:"http://www.nytimes.com/services/xml/rss/nyt/Economy.xml",
        format:"div[class=story-body-supplemental] p"
}

module.exports = {
    cnn_money,cnn_travel,cnn_entertainment,cnn_sport,cnn_tech,cnn_health,cnn_politics,
    newyork_tech,newyork_entertainment,newyork_politics,newyork_travel,newyork_sport,newyork_health,newyork_money
};
