// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');
let apiGroup = require('./controllers/bpgroupControllers');
let apiWeightLifting=require('./controllers/cpweightliftingControllers');
let apibpworkofday=require('./controllers/bpworkofdayControllers');     
let apiworkout =require('./controllers/bpworkoutControllers');  
    

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});


// PARA BPUSER!!!

//EndPoint para leer toda la base
router.get('/getUsers',function(req,res)
{
    console.log("leer");
    apiController.getUsers(req,res);
});
router.get('/loginUser',function(req,res)
{
    console.log("leer");
    apiController.loginUser(req,res);
});

//EndPoint para leer con filtro nombre
router.get('/getUsersName',function(req,res)
{
    apiController.getContactosByname(req,res);
});


//EndPoint para leer con filtro key
router.get('/searchUserbyKey',function(req,res)
{
    apiController.searchUserbyKey(req,res);
});



//EndPoint para leer con filtro

/*router.post('/leerAgenda/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    apiController.getContactosById(req,res);
});
*/

//EndPoint para insertar  usuario en la BD
router.post('/createUser/Bpuser',function(req,res)
{
    console.log(req.body);
    apiController.createUser(req,res);
});

//EndPoint para modificar usuario en la BD
router.post('/updateUser/Bpuser',function(req,res)
{
    apiController.updateUser(req,res);
});

//EndPoint para eliminar  usuario en la BD
router.delete('/deleteUser/Bpuser',function(req,res)
{
    apiController.deleteUser(req,res);
});

//PARA BPGROUP!!!
//EndPoint para crear grupo en la BD
router.post('/createGroup/BpGroup',function(req,res)
{
    apiGroup.createGroup(req,res);
});
//EndPoint para eliminar  grupo en la BD
router.delete('/deleteGroup/BpGroup',function(req,res)
{
    apiGroup.deleteGroup(req,res);
});
//EndPoint para mostrar grupo en la BD
router.get('/getGroups',function(req,res)
{
    apiGroup.getGroups(req,res);
});
router.get('/getGroupsMembers',function(req,res)
{
    apiGroup.getGroupsMembers(req,res);
});
router.get('/getGroupsByKey',function(req,res)
{
    apiGroup.searchGroupbyKey(req,res);
});

//PARA cpweightlifting!!!
router.post('/insertWeightLifting',function(req,res)
{
    console.log(req.body);
    apiWeightLifting.insertWeightLifting(req,res);
});
router.delete('/deleteWeightLifting',function(req,res)
{
    apiWeightLifting.deleteWeightLifting(req,res);
});
router.get('/getWeightLifting',function(req,res)
{
    console.log("leer");
    apiWeightLifting.getWeightLifting(req,res);
});

//PARA bpworkofday!!!
router.post('/createWorkOfDay',function(req,res)
{
    console.log(req.body);
    apibpworkofday.createWorkOfDay(req,res);
});
router.delete('/deleteBPworkofday',function(req,res)
{
    apibpworkofday.deleteBPworkofday(req,res);
});
router.get('/getBPworkofday',function(req,res)
{
    console.log("leer");
    apibpworkofday.getBPworkofday(req,res);
});
router.get('/getBPworkofdayworkouts',function(req,res)
{
    apibpworkofday.getBPworkofdayworkouts(req,res);
});


//PARA bpworkout!!!
router.post('/createWorkout',function(req,res)
{
    console.log(req.body);
    apiworkout.createWorkout(req,res);
});
router.get('/getBPworkout',function(req,res)
{
    console.log("leer");
    apiworkout.getBPworkout(req,res);
});
router.get('/getWorkoutCpWeightLifting',function(req,res)
{
    apiworkout.getWorkoutCpWeightLifting(req,res);
});

// Export API routes
module.exports = router;