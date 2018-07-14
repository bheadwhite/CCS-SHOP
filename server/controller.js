module.exports = {
  getSkate: (req, res, next) => {
    const db = req.app.get("db");
    db.getSkate()
      .then(result => res.status(200).send(result))
      .catch(err => {
        res.status(501).send(err);
      });
  },
  getCart: (req, res, next) => {
    res.send(req.session.cart);
  },
  getQuantity: (req, res, next) => {
    res.status(200).send(req.session);
  },
  getItem: (req, res, next) => {
    const db = req.app.get("db");
    db.getItem([req.params.id])
      .then(result => res.status(200).send(result))
      .catch(err => {
        res.status(501).send(err);
      });
  },
  getSearch: (req, res, next) => {
    console.log('backend reached. sending query to db')
    const db = req.app.get("db");
    db.search([req.query.q + "%"])
      .then(result => {
        console.log('sending data....');
        res.status(200).send(result);
      })
      .catch(err => res.status(500).send(err));
  },
  recentThree: (req, res, next) => {
    const db = req.app.get("db");
    db.recent().then(result => {
      res.send(result);
    });
  },
  submitOrder: (req, res, next) => {
    const db = req.app.get("db");
    let totalPrice = req.body.order.reduce((total, nextValue) => {
      return total + nextValue.price;
    }, 0);
    let products = [];
    for (let i = 0; i < req.body.order.length; i++) {
      let idValue = req.body.order[i].id;
      products.push(idValue);
    }
    products = products.join(" ");
    db.submit([
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.address,
      req.body.city,
      req.body.state,
      req.body.zip,
      req.body.shippingMethod,
      req.body.cardNumber,
      req.body.expiration,
      req.body.cvv,
      products,
      totalPrice
    ])
      .then(result => {
        res.send("ok");
      })
      .catch(err => {
        res.send(err);
      });
  },
  user: (req, res, next) => {
    const db = req.app.get("db");
    db.user()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
