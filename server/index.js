const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();
const app = express();
const controller = require("./controller");
const session = require("express-session");

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));
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
  next();
});
massive(process.env.CONNECTIONSTRING).then(db => {
  app.set("db", db);
  console.log("db is connected");
});
app.get("/api/getSkate", controller.getSkate);
app.get("/api/cart", controller.getCart);
app.get("/api/getItem/:id", controller.getItem);
app.get("/api/search", controller.getSearch);

app.post("/api/cart", (req, res) => {
  req.session.cart.push(req.body);
  res.send(req.session.cart);
});
//put request to update quantities
app.delete("/api/cart/:id", (req, res) => {
  let index = req.session.cart.findIndex(item => item["id"] === req.params);
  req.session.cart.splice(index, 1);
  res.send(req.session.cart);
});

port = 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
