const controller = require('../controllers/controllers')

module.exports = function (router) {
    router.get('/', controller.getdefault)
    router.get('/aboutus', controller.aboutus)
    router.post('/addEmployee', controller.addEmployee)
    router.get('/getEmployees', controller.getEmployees)
    router.get('/getEmployee/:employeeName', controller.getEmployee)
    router.put('/updateEmployee', controller.updateEmployee)
    router.get('/deleteByName', controller.deleteByName)
}