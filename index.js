/*
* title: Uptime Monitoring Application
* Description: A RESTFUL API to monitor up or down time of user defined links
* Author: Arjun Chandra Das
* Date: 12/24/21
*/

//dependencies
const http = require('http');
const {handelReqRes} = require('./helpers/handleReqRes')
//app objcet module scaffolding
const app={};

//configaration
app.config = {
    port:3000
};

//create server
app.createServer =()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listening to poet ${app.config.port}`);
    })
}

//handle requst responce
app.handleReqRes = handelReqRes;

//start the server
app.createServer();
