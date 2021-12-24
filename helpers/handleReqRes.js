/*
* title: Handle request response
* Description: Handle request response
* Author: Arjun Chandra Das
* Date: 12/24/21
*/

//dependencies
const {StringDecoder} = require('string_decoder');
const url = require('url');
const routes = require('../helpers/routes')
const {notFoundHandler} = require('../handlers/routHandlers/notFoundHandler')

//module scaffolding
const handler ={};

handler.handelReqRes = (req,res)=>{
    //handle req
    const parseUrl = url.parse(req.url,true);
    const path =parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };
    
    const decoder = new StringDecoder('utf-8');
    let realData ='';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    chosenHandler(requestProperties,(statusCode,payload)=>{
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        //return the final res

        res.writeHead(statusCode);
        res.end(payloadString);

    });


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

module.exports=handler;