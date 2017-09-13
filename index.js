const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const signToken=require("./utils/jwt.js").signToken;


//註冊 body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(function(req, res, next){
    console.log(new Date());
    next();
});

app.get("/",function(req,res){
    res.send("hello world!");
});

app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.post('/login', function(req, res){
    console.log(req.body);
    //驗證帳密
    if(req.body.username === "abc" && req.body.password == "abc"){
        
        signToken({username:"abc"},
            function(err,token){
                res.json({
                    login:true,
                    token:token
                });
            })
    }else{
        //錯誤
        res.json({
            login: false
        });
    }
});
app.post("/login",function(req,res){
    //傳入資料會存在 req.body中
    console.log(req.body);
    //以json 格式回應
    res.json(req.body);
});

app.listen(3000,function(){
    console.log("server start!");
});