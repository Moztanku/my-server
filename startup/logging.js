const {createLogger,format,transports, transport} = require('winston');
const {Console,File} = transports;
const {combine,colorize,simple,timestamp,json} = format;

module.exports = createLogger({
    transports:[
        new Console({
            format: combine(
                colorize(),
                simple()
            )
        }),
        new File({ 
            filename: 'error.log',
            level:'error',
            format: combine(
                timestamp(),
                json()
            )
        }),
        new File({ 
            filename: 'rest.log',
            format: combine(
                timestamp(),
                json()
            )
        })
    ],
    exceptionHandlers:[
        new File({
            filename:'exceptions.log',
            format: combine(
                timestamp(),
                json()
            )
        }),
        new Console()
    ]
});