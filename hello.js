const fs = require("fs");
/*fs.writeFile("message.txt","welcome to nodejs",(err)=>{
     if(err) throw err;
     console.log("hello the file has been saved");
})*/
fs.readFile("./message.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);

});
 