const Employee = require('../models/employee')
exports.getdefault = function (req, res) {
    res.send('You are on the root route')
}

exports.aboutus = function (req, res) {
    res.send('You are on aboutus route')
}

exports.addEmployee = function (req, res) {
    let empName = req.body.empName
    let empPass = req.body.empPass
    const Emp = new Employee();
    Emp.empName = empName
    Emp.empPass = empPass
    Emp.save({}, function (err) {
        if (err)
            res.end(err)
        res.send(`Created ${empName}`)
    })
}

exports.getEmployees = function (req, res) {
    Employee.find({}, function (err, results) {
        if (err)
            res.end(err)
        res.json(results)
    })
}

exports.getEmployee = function (req, res) {
    let empToFind = req.params.employeeName
    Employee.find({ empName: empToFind }, function (err, results) {
        if (err)
            res.end(err)
        if (!results.length)
            res.status(404).
                res.json(results)
    })
}

exports.deleteByName = function (req, res) {
    let empToDelete = req.body.employeeName
    Employee.deleteOne({ empName: empToDelete }, function (err, results) {
        if (err)
            res.send(err)
        res.end(`Deleted ${empToDelete}`)
    })
}

exports.updateEmployee = function (req, res) {
    let empName = req.body.empName
    let newPass = req.body.newPass

    let query = { empName: empName }
    let data = { $set: { empPass: newPass } }

    Employee.updateOne(query, data, function (err, result) {
        if (err)
            res.send(err)
        res.send(`Updated ${empName}`)
    })
}