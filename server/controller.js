module.exports = {
    getSkate: (req, res, next) => {
        const db = req.app.get('db');

        db.getSkate().then(result => res.status(200).send(result))
        .catch(err => {
            console.log(err);
            res.status(501).send(err)
        })
    }
}