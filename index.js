const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine(
    '.hbs',
    exphbs({
        extname: '.hbs',
        layoutsDir: __dirname + '/views/layouts/',
        partialsDir: __dirname + '/views/components/',
    }),
);
app.set('view engine', '.hbs');

app.use(express.static('public'));

function displayView(route, fileName, title) {
    return app.get(route, function (req, res) {
        res.render(fileName, { layout: 'main', data: title });
    });
}

displayView('/', 'index', 'Dashboard');
displayView('/active-orders', 'active-orders', 'Active Orders');
displayView('/create-profile', 'create-profiles', 'Create Profiles');
displayView('/create-orders', 'create-orders', 'Create Orders');
displayView('/dispatcher-list', 'dispatcher-list', 'Dispatchers List');
displayView('/orders-history', 'orders-history', 'Orders History');
displayView('/orders-status', 'orders-status', 'Orders Status');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
