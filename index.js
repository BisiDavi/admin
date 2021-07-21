const express = require('express');
const exphbs = require('express-handlebars');
const appRoutes = require('./controllers/routes');
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

app.use('/', appRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
