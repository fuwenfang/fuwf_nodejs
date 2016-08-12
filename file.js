/**
 * Created by fuwenfang on 2016/8/12.
 */
var fs = require('fs')
fs.open('input02.txt','w',function(err,data){
    if(err){
        return console.error(err)
    }
    console.log("打开文件成功！")
})
fs.writeFile('input.txt','我是通过写入的内容',function(err){
    if(err){
        return console.error(err)
    }
    console.log('写入成功')
    fs.readFile('input.txt',function(err,data){
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    })
})