const express = require("express");
const app = express();
const about = require("./conf/about.js");
const a = require("./conf/a.js");
const b = require("./conf/b.js");
const c = require("./conf/c.js");
const a_s = require("./conf/a_s.js");
const b_s = require("./conf/b_s.js");
const c_s = require("./conf/c_s.js");
app.use(express.static('public'));
app.engine("html",require("express-art-template"));

app.get("/"     , (req,res)=>{ res.render("index.html");});
app.get("/a_s.html",(req,res)=>{ res.render("a_s.html",{a_s:a_s});});
app.get("/b_s.html",(req,res)=>{ res.render("b_s.html",{b_s:b_s});});
app.get("/c_s.html",(req,res)=>{ res.render("c_s.html",{c_s:c_s});});
app.get("/about.html",(req,res)=>{ res.render("about.html",{
    url:about.url,
    introduce:about.introduce,
    vip_total1:about.vip_total1,
    vip_total2:about.vip_total2,
    vip_total3:about.vip_total3,
    vip_total4:about.vip_total4,
    timeline:about.timeline,
    num_total:about.num_total
});});
app.get("/a.html",(req,res)=>{ res.render("a.html",{a:a});});
app.get("/b.html",(req,res)=>{ res.render("b.html",{b:b});});
app.get("/c.html",(req,res)=>{ res.render("c.html",{c:c});});
app.listen("8080" , ()=>{
console.log("service start on port 8080... ")
});