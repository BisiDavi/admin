const express = require('express');
const router = express.Router();

function getView(route, fileName, title, layout = 'main') {
    return router.get(route, function (req, res) {
        res.render(fileName, { layout, data: title });
    });
}

function authView(route, fileName) {
    return router.get(route, function (req, res) {
        res.render(fileName, { layout: 'auth' });
    });
}

getView('/', 'index', 'Dashboard');
getView('/active-orders', 'active-orders', 'Active Orders');
getView('/create-profile', 'create-profiles', 'Create Profiles');
getView('/create-orders', 'create-orders', 'Create Orders');
getView('/dispatcher-list', 'dispatcher-list', 'Dispatchers List');
getView('/orders-history', 'orders-history', 'Orders History');
getView('/orders-status', 'orders-status', 'Orders Status');

authView('/login', 'login');
authView('/register', 'register');
authView('/recover-password', 'recover-password');


module.exports = router;
