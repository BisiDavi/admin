const express = require('express');
const exphbs = require('express-handlebars');
const appRoutes = require('./controllers/routes');
const app = express();

const PORT = process.env.PORT || 3000;

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

app.use((req, res, next) => {
    if (res.status(404)) {
        res.render('404', { layout: 'error' });
    } else {
        res.render('500', { layout: 'error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
