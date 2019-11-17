// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');
       
    

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

//EndPoint para leer toda la base
router.get('/getUsers',function(req,res)
{
    console.log("leer");
    apiController.getUsers(req,res);
});

//EndPoint para leer con filtro

/*router.post('/leerAgenda/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    apiController.getContactosById(req,res);
});
*/
//EndPoint para insertar en la BD
router.post('/insertContact/Bpuser',function(req,res)
{
    console.log(req.body);
    apiController.insertContact(req,res);
});

//EndPoint para modificar en la BD
router.post('/updateContact/Contact',function(req,res)
{
    apiController.updateContacto(req,res);
});

//EndPoint para eliminar en la BD
router.delete('/deleteUser/Bpuser',function(req,res)
{
    apiController.deleteUser(req,res);
});
// Export API routes
module.exports = router;