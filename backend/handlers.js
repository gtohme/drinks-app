const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
// const request = require('request-promise');
require('dotenv').config();
const { API_KEY_ } = process.env;

const getDrinksByName = async (req, res) => {
  const { name } = req.params;

  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

  try {
    const apiData = {
      headers: {
        Authorization: `Bearer ${API_KEY_}`,
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/json',
        withCredentials: true,
      },
    };

    const response = await fetch(cocktailUrl, apiData);
    const data = await response.json();

    console.log(data);

    res.status(200).json({ status: 200, data });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getDrinksByFirstLetter = async (req, res) => {
  const { letter } = req.params;

  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

  try {
    const apiData = {
      headers: {
        Authorization: `Bearer ${API_KEY_}`,
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/json',
        withCredentials: true,
      },
    };

    const response = await fetch(cocktailUrl, apiData);
    const data = await response.json();

    console.log(data);

    res.status(200).json({ status: 200, data });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getIngredientByName = async (req, res) => {
  const { ingredient } = req.params;
  //ingredients have numbers 1-15

  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`;

  try {
    const apiData = {
      headers: {
        Authorization: `Bearer ${API_KEY_}`,
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/json',
        withCredentials: true,
      },
    };

    const response = await fetch(cocktailUrl, apiData);
    const data = await response.json();

    console.log(data);

    res.status(200).json({ status: 200, data });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getDrinksDetailsById = async (req, res) => {
  const { id } = req.params;

  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${id}`;

  try {
    const apiData = {
      headers: {
        Authorization: `Bearer ${API_KEY_}`,
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/json',
        withCredentials: true,
      },
    };

    const response = await fetch(cocktailUrl, apiData);
    const data = await response.json();

    console.log(data);

    res.status(200).json({ status: 200, data });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getRandomDrink = async (req, res) => {
  const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  try {
    const apiData = {
      headers: {
        Authorization: `Bearer ${API_KEY_}`,
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/json',
        withCredentials: true,
      },
    };

    const response = await fetch(cocktailUrl, apiData);
    const data = await response.json();

    // data = cleanDrinkData(data);

    console.log(data.drinks[0]);
    if (response) res.status(200).json({ status: 200, data: data.drinks[0] });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

/**
 * Cleans the data that comes back from the drinks API.
 *
 * @param {*} data
 * @returns
 */
// const cleanDrinkData = function (data) {
//   // TODO

//   const newDrinksData = {};

//   const ingredients = [];
//   const measures = [];

//   if (data.ingredients1) {
//     ingredients.push(data.ingredients1);
//   }

//   newDrinksData.flavor = data.flavor;
//   newDrinksData.color = data.color;
//   newDrinksData.ingredients = ingredients;
//   newDrinksData.measures = measures;

//   return newDrinksData;
// };

const searchDrinkByNameOrIngredient = async (req, res) => {
  const { value } = req.params;
  //ingredients have numbers 1-15

  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${value}`;
  const cocktailUrl2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;

  try {
    const apiData = {
      headers: {
        Authorization: `Bearer ${API_KEY_}`,
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/json',
        withCredentials: true,
      },
    };
    // const response = await fetch(cocktailUrl, apiData);
    // const data = await response.json();
    // // console.log('+++++++++++=', data.strDrink);
    // if (response === null) {
    //   console.log('cocktailUrl');
    //   return res.status(200).json({ status: 200, data });
    // }

    const response1 = await fetch(cocktailUrl2, apiData);
    const data1 = await response1.json();
    console.log('==========', data1);
    // if (cocktailUrl === null) {
    //   console.log('cocktailUrl2');
    return res.status(200).json({ status: 200, data: data1 });
    // }

    // res.status(200).json({ status: 200, data });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

module.exports = {
  getDrinksByName,
  getDrinksByFirstLetter,
  getIngredientByName,
  getDrinksDetailsById,
  getRandomDrink,
  searchDrinkByNameOrIngredient,
  // getFilterDrinkAlcoholOrNon,
  // getCategory,
};
