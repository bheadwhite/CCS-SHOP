const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();
const app = express();
const controller = require("./controller");
const session = require("express-session");

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = [];
  }
});
app.use(bodyParser.json());
massive(process.env.CONNECTIONSTRING).then(db => {
  app.set("db", db);
  console.log("db is connected");
});
app.get("/api/getSkate", controller.getSkate);
app.get("/api/cart", controller.getCart);
app.post("/api/cart", (req, res) => {
  req.session.cart.push(req.body);
  res.send(req.session.cart);
});
app.delete("/api/cart/:id", (req, res) => {
  console.log("your going to delete something now");
});

port = 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
