const bodyParser = require('body-parser'),
         express = require('express'),
            path = require('path');
                   require('ejs');

//     APP SETUP

const app = express();
app.set('views', path.join(__dirname, 'src'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));