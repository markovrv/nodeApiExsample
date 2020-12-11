var MongoClient = require('mongodb').MongoClient;
var state = {
    db: null
}
exports.connect = (url, bdname, done) => {
    if (state.db) return done();
    MongoClient.connect(url, {
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) return done(err);
        state.db = client.db(bdname);
        done();
    });
}

exports.collection = (collection) => state.db.collection(collection);