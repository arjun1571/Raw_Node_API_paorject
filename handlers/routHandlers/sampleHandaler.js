/*
* title: Sample handaler
* Description: Sample handaler
* Author: Arjun Chandra Das
* Date: 12/24/21
*/

//module scaffolding

const handler ={

};

handler.sampleHandler =(requestProperties,callback)=>{
    console.log(requestProperties);
    callback(200,{
        message:'this is sample url'
    })
};

module.exports=handler;