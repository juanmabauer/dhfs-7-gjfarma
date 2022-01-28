const express = require("express");
const path = require("path");
const port = 3001;
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');


app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "views"));

const publicPath = path.resolve(__dirname, "../public");
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
	secret: "GJFarma",
	resave: false,
	saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Routes */
const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const apiUsersRouter = require('./routes/api/users');
const apiProductsRouter = require('./routes/api/products');
const apiCategoriesRouter = require('./routes/api/categories');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/api/users',apiUsersRouter);
app.use('/api/products',apiProductsRouter);
app.use('/api/categories',apiCategoriesRouter);

app.listen(port,()=> console.log(`Running on port ${port}`));
