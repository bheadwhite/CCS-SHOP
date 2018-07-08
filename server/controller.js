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
    console.log(req.session.cart);
    res.send(req.session.cart);
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
    const db = req.app.get("db");
    db.search([req.query.q+'%'])
      .then(result => {console.log(result),
        res.status(200).send(result);
      })
      .catch(err => res.status(500).send(err));
  }
};
