const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

// settings
app.set('port', process.env.PORT || 8080);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes'));
app.use('/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
