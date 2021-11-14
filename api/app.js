require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
require('./api/models/db');
const apiRouter = require('./app/routes/index');
const app = express();


if (process.env.ENVIRONMENT === 'dev') {
    var listener = app.listen(3002, function(){
        console.log('Listening on port ' + listener.address().port); //Listening on port 8888
    });
}

if (process.env.ENVIRONMENT === 'production') {
    var listener = app.listen(3000, function(){
        console.log('Listening on port ' + listener.address().port); //Listening on port 8888
    });
}



// view engine setup
app.set('routes', path.join(__dirname, 'app_server', 'routes'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
console.log(process.env.ENVIRONMENT);
module.exports = app;