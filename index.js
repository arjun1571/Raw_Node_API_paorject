/*
* title: Uptime Monitoring Application
* Description: A RESTFUL API to monitor up or down time of user defined links
* Author: Arjun Chandra Das
* Date: 12/24/21
*/

//dependencies
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder');
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
app.handleReqRes =(req,res)=>{
    //handle req
    const parseUrl = url.parse(req.url,true);
    const path =parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;
    
    const decoder = new StringDecoder('utf-8');
    let realData ='';

    req.on('data',(buffer)=>{
        realData += decoder.write(buffer);
    })

    req.on('end',()=>{
        realData += decoder.end();
        console.log(realData);

        //handle res
        res.end('hello programmer');
    })

   
    
}

//start the server
app.createServer();
