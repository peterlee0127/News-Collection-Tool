var fs = require('fs');

function getDirectory(path) {
    var data = fs.readdirSync(path);
    for(var i=0;i<data.length;i++){
    var item = data[i];
        if(item==".DS_Store") {
            data.splice(i,1);
        }
    }
    return data;
}

var prefix = 'data/';
var Path = getDirectory(prefix).map(function(folder){
    return prefix+folder;
});


for(var i=0;i<Path.length;i++) {
    var path = getDirectory(Path[i]);
    var filePath = path.map(function(_){return Path[i]+"/"+_});
    for(var j=0;j<filePath.length;j++){
        var content = fs.readFileSync(filePath[j],'utf-8')
          var rep = new RegExp(/\W+/,'g');
          content = content.replace(rep,' ').replace(/[0-9]/g,'');

        var newPath = "train"+filePath[j].replace(/data/g,'');
        fs.writeFile(newPath,content);
    }
}
