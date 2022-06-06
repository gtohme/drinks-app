'use strict';

const express = require('express');
const morgan = require('morgan');

const PORT = 4000;

const {
  getDrinksByNames,
  getDrinksByFirstLetter,
  getIngredientsByName,
  getDrinksDetailsById,
  getRandomDrink,
  getFilterDrinkAlcoholOrNon,
  getCategory,
} = require('./getData');

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
  .get('/api/get-drinks-names', getDrinksByNames)
  .get('/api/get-drinks-letter/:letter', getDrinksByFirstLetter)
  .get('/api/get-ingredients-name', getIngredientsByName)
  .get('/api/get-drinks-details/:id', getDrinksDetailsById)
  .get('/api/get-random-drink', getRandomDrink)
  .get('/api/filter-alcohol-non', getFilterDrinkAlcoholOrNon)
  .get('/api/get-category/:category', getCategory)

  .get('/api/get-bodylocations', getBodyLocations)
  .get('/api/get-bodylocation/:location', getBodyLocation)

  // .post('/api/get-item-details', getItemDetails)
  // .post('/api/create-order', createOrder)
  // .delete('/api/delete-order', deleteOrder)
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

// List the categories, glasses, ingredients or alcoholic filters
// www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// www.thecocktaildb.com/api/json/v1/1/list.php?g=list
// www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// www.thecocktaildb.com/api/json/v1/1/list.php?a=list
