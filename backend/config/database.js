const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.muiaekd.mongodb.net/NodeJS`);

module.exports = mongoose;