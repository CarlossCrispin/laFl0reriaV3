

const mongoose = require('mongoose');

const URI = process.env.DB || 'mongodb://carlos:Fl0reria@ds231090.mlab.com:31090/lafloreria';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('BD is connected '))
    .catch(err => console.error(err));

module.exports = mongoose;