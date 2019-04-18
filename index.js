const express = require("express");
const fs = require("fs");
const bodyParser = require('body-parser')
const app = express();

let a = JSON.parse(fs.readFileSync('./conf/a.json'));
let b = JSON.parse(fs.readFileSync('./conf/b.json'));
let c = JSON.parse(fs.readFileSync('./conf/c.json'));
let about = JSON.parse(fs.readFileSync('./conf/about.json'));
let a_s =JSON.parse(fs.readFileSync('./conf/a_s.json'));
let b_s = JSON.parse(fs.readFileSync('./conf/b_s.json'));
let c_s = JSON.parse(fs.readFileSync('./conf/c_s.json'));

app.use(express.static('public'));
app.engine("html", require("express-art-template"));
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", (req, res) => {
    res.render("index.html");
});
app.get("/a_s.html", (req, res) => {
    res.render("a_s.html", {a_s: a_s});
});
app.get("/b_s.html", (req, res) => {
    res.render("b_s.html", {b_s: b_s});
});
app.get("/c_s.html", (req, res) => {
    res.render("c_s.html", {c_s: c_s});
});
app.get("/about.html", (req, res) => {
    res.render("about.html", {
        url: about.url,
        introduce: about.introduce,
        vip_total1: about.vip_total1,
        vip_total2: about.vip_total2,
        vip_total3: about.vip_total3,
        vip_total4: about.vip_total4,
        timeline: about.timeline,
        num_total: about.num_total
    });
});
app.get("/a.html", (req, res) => {
    res.render("a.html", {a: a});
});
app.get("/b.html", (req, res) => {
    res.render("b.html", {b: b});
});
app.get("/c.html", (req, res) => {
    res.render("c.html", {c: c});
});
app.get("/admin", (req, res) => {
    res.render("admin.html")
});
app.get("/admin_1", (req, res) => {
    res.render("admin/1.html")
});
app.get("/get_about", (req, res) => {
    res.send(about)
});

app.post("/update1",jsonParser,(req,res)=>{
    fs.writeFileSync("./conf/about.json",JSON.stringify(req.body));
    res.send({"msg":"ok"});
});
app.listen("80", () => {
    console.log("service start on port 80... ")
});