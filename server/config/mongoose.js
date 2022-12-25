const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://YashaswiAnand:Uxb0ZcUv6RcAo2Zn@cluster0.exwmdrm.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error conection on mongodb'));

db.once('open', function () {
    console.log('Connected to database :: MongoDB');
});

module.exports = db;