'use strict';

const express = require('express');
const morgan = require('morgan');

const PORT = 8000;

const {
  getDrinksByName,
  getDrinksByFirstLetter,
  getIngredientByName,
  getDrinksDetailsById,
  getRandomDrink,
  searchDrinkByNameOrIngredient,
  getGlasses,
  // getFilterDrinkAlcoholOrNon,
  // getCategory,
} = require('./handlers');

const {
  addUser,
  getUsers,
  getUser,
  updatingFavourites,
  updatingComments,
  getComments,
} = require('./handlersUsers');

express()
  .use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // REST endpoints?
  .get('/api/get-drinks-name/:name', getDrinksByName)
  .get('/api/get-drinks-letter/:letter', getDrinksByFirstLetter)
  .get('/api/get-ingredients-name/:ingredient', getIngredientByName)
  .get('/api/get-drinks-details/:id', getDrinksDetailsById)
  .get('/api/get-random-drink', getRandomDrink)
  .get('/api/searchDrinks/:value', searchDrinkByNameOrIngredient)
  .get('/api/get-glasses/:glass', getGlasses)
  // .get('/api/filter-alcohol-non', getFilterDrinkAlcoholOrNon)
  // .get('/api/get-category/:category', getCategory)

  .get('/api/get-users', getUsers)
  .get('/api/get-user/:email', getUser)
  .post('/api/add-user', addUser)
  .post('/api/update-favourites', updatingFavourites)
  .post('/api/update-comments', updatingComments)
  .get('/api/get-comments', getComments)
  ////.get("/api/profile")
  // .post('/api/get-item-details', getItemDetails)
  // .delete('/api/delete-order', deleteOrder)
  .get('*', (req, res) => {
    res.status(404).json({
      status: 404,
      message: 'This is obviously not what you are looking for.',
    });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

// List the categories, glasses, ingredients or alcoholic filters
// www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// www.thecocktaildb.com/api/json/v1/1/list.php?g=list
// www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// www.thecocktaildb.com/api/json/v1/1/list.php?a=list
