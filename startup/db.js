const logger = require('./logging');
const mongoose = require('mongoose');
const {connect,connection} = mongoose;
const {JWTPRIVATEKEY,DB_USER,DB_PASSWORD,DB_ADDRESS,DB_NAME} = process.env;

module.exports = async function(){
    if(!JWTPRIVATEKEY | !DB_USER | !DB_PASSWORD | !DB_ADDRESS | !DB_NAME){
        throw new Error('FATAL ERROR: .env file is not setup correctly.');
    }
    const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_ADDRESS}/${DB_NAME}`;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
        socketTimeoutMS: 1000
    };
    try {
        await connect(uri,options);
        logger.info(`Connected to ${DB_NAME} as ${DB_USER}`);
    } catch (error) {
        throw new Error(error);
    }
    
    connection.on('error',error=>{
        throw new Error(error);
    });
    connection.on('disconnected',()=>{
        logger.warn('Disconected from a database');
    });
}