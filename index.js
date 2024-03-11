const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/" , function(req , res) {
    res.sendFile(__dirname +"/index.html");
});
app.post("/" , function(req , res) { 
   var num1 = Number(req.body.text1);
   var num2 = Number(req.body.text2);
   var num3 = num1 + num2;
   res.send("the result is :"+num3);
});
app.listen(3000 , function() {
    console.log("Your server is rinning");
});
