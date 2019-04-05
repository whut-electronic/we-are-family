const express = require("express");
const app = express();
const about = require("./tools/about.js");
const a = require("./tools/a.js");
const b = require("./tools/b.js");
const c = require("./tools/c.js");
app.use(express.static('public'));
app.engine("html",require("express-art-template"));

app.get("/"     , (req,res)=>{ res.render("index.html");});
app.get("/a_s.html",(req,res)=>{ res.render("a_s.html");});
app.get("/b_s.html",(req,res)=>{ res.render("b_s.html");});
app.get("/c_s.html",(req,res)=>{ res.render("c_s.html");});
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