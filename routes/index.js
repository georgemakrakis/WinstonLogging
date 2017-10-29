let express = require('express');
let router = express.Router();
let logger = require('../modules/logger');
let moment = require('moment');
/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Express' });

    // logger.log('info', '======Hello log files!======', {
    //     someKey: 'some-value2'
    // });
    //
    // logger.log('error', '======Hello error files!======', {
    //     someKey: 'some-value2'
    // });

    logger.info('hello-info');
    logger.error('hello-error');

    // logger.log({
    //     level: 'info',
    //     timestamp: function () {
    //         return moment().format('YYYY-MM-DD hh:mm:ss')
    //     },
    //     message: 'Hello distributed log files!'
    // });

    // logger.error('hello-error');
    // logger.debug('hello-debug');
    // logger.silly('hello-silly');
    // logger.verbose('hello-verbose');
    // logger.warn('hello-warn');


});

module.exports = router;
