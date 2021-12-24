/*
* title: Routes
* Description: Application Routes
* Author: Arjun Chandra Das
* Date: 12/24/21
*/

//dependencies

const {sampleHandler}=require('../handlers/routHandlers/sampleHandaler')

const routes ={
    'sample':sampleHandler,
}

module.exports=routes;