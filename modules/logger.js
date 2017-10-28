let winston = require('winston');
// let winston_mongodb = require('winston-mongodb');
let moment = require('moment');
require('winston-mongodb');
// winston.add(winston.transports.MongoDB, 'info');
// let logger = new (winston.Logger)({
//     // level: 'info',
//     // format: winston.format.json('a'),
//     transports: [
//         //
//         // - Write to all logs with level `info` and below to `combined.log`
//         // - Write all logs error (and below) to `error.log`.
//         //
//         // new winston.transports.File({ filename: 'error.log', level: 'error' }),
//         // new winston.transports.File({ filename: 'combined.log' }),
//         new winston.transports.File({
//             name: 'combined-file',
//             filename: 'combined.log',
//             json: true
//         }),
//         new winston.transports.File({
//             name: 'error-file',
//             filename: 'error.log', level: 'error',
//             json: true
//         }),
//         new(winston.transports.MongoDB)({
//             name: 'mongo-log',
//             db : 'localhost:27017',
//             collection : 'info-logs',
//             level : 'info',
//             capped : true
//          })
//
//     ]
// });

let logger = winston.loggers.add('mongoLog',{

    transports : [
        // Must add the rest levels such as error and others
        new(winston.transports.MongoDB)({
            //host: 'mongodb://localhost:27017',
            name: 'error-log',
            db : 'mongodb://localhost:27017/test',
            collection : 'error-log',
            level : 'error',
            capped : true
        }),
        new(winston.transports.MongoDB)({
            //host: 'mongodb://localhost:27017',
            name: 'warn-log',
            db : 'mongodb://localhost:27017/test',
            collection : 'warn-log',
            level : 'warn',
            capped : true
        }),
        new(winston.transports.MongoDB)({
            //host: 'mongodb://localhost:27017',
            name: 'info-log',
            db : 'mongodb://localhost:27017/test',
            collection : 'info-log',
            // timestamp() {
            //     return moment().format('YYYY-MM-DD HH:mm:ss');
            // },
            timestamp : true,
            level : 'info',
            capped : true
        }),
        new(winston.transports.MongoDB)({
            //host: 'mongodb://localhost:27017',
            name: 'verbose-log',
            db : 'mongodb://localhost:27017/test',
            collection : 'verbose-log',
            level : 'verbose',
            capped : true
        }),
        new(winston.transports.MongoDB)({
            //host: 'mongodb://localhost:27017',
            name: 'debug-log',
            db : 'mongodb://localhost:27017/test',
            collection : 'debug-log',
            level : 'debug',
            capped : true
        }),
        new(winston.transports.MongoDB)({
            //host: 'mongodb://localhost:27017',
            name: 'silly-log',
            db : 'mongodb://localhost:27017/test',
            collection : 'silly-log',
            level : 'silly',
            capped : true
        })
    ]
});

module.exports = logger;