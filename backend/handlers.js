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

    console.log(data.drinks[0]);
    if (response) res.status(200).json({ status: 200, data: data.drinks[0] });
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
  // getFilterDrinkAlcoholOrNon,
  // getCategory,
};
