/*
* title: notFound handaler
* Description: 404 notFound handaler
* Author: Arjun Chandra Das
* Date: 12/24/21
*/

//module scaffolding

const handler ={

};

handler.notFoundHandler =(requestProperties,callback)=>{
    callback(404,{
        messge:'your req not found'
    });
};

module.exports=handler;