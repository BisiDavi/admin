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
getView('/active-trips', 'active-orders', 'Active Trips');
getView('/create-profile', 'create-profiles', 'Create Profiles');
getView('/create-trips', 'create-orders', 'Create Trips');
getView('/dispatcher-list', 'dispatcher-list', 'Dispatchers List');
getView('/orders-history', 'orders-history', 'Orders History');
getView('/admin-list', 'admin-list', 'Admin List');
getView('/store-list', 'store-list', 'Store List');

authView('/login', 'login');
authView('/register', 'register');
authView('/recover-password', 'recover-password');

module.exports = router;
