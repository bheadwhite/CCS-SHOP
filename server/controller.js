module.exports = {
  getSkate: (req, res, next) => {
    const db = req.app.get("db");
    console.log('hitting here')
    db.getSkate()
      .then(result => res.status(200).send(result))
      .catch(err => {
        console.log(err);
        res.status(501).send(err);
      });
  },
  getCart: (req, res, next) => {
    console.log(req.session.cart)
    res.send(req.session.cart);
  },
  getItem: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.body);
    db.getItem([req.params.id])
      .then(result => res.status(200).send(result))
      .catch(err => {
        res.status(501).send(err);
      });
  }
};
