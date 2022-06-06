const request = require('request-promise');
require('dotenv').config();
const { API_KEY_ } = process.env;

// const options = {
//   uri: 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',

//   headers: {
//     key: { API_KEY_ },
//     accept: 'application/json',
//   },
//   json: true, // Automatically parses the JSON string in the response
// };

// const getDrinksByName = async () => {
//   try {
//     const drinksApi = await request(
//       'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
//     );
//     const drinksName = JSON.parse(drinksApi);
//     // console.log(drinksName);
//     return drinksName;
//   } catch (err) {
//     'Error: ', err;
//   }
// };

// getDrinksByName().then((data) => console.log('hello', data));

const getDrinksByFirstLetter = async (req, res) => {
  // const { drinksLetter } = req.params;

  // let letter = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
  const options = {
    uri: 'http//www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
    // uri: `http//www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinksLetter}`,
    headers: {
      accept: 'application/json',
    },
    json: true, // Automatically parses the JSON string in the response
  };
  try {
    const drinksFirstLetter = await request(options);
    return drinksFirstLetter;
    // drinksFirstLetter.length > 0
    //   ? sendMessage(res, 200, result, `Drinks by ${drinksFirstLetter} success!`)
    //   : sendMessage(res, 404, null, `Drinks by ${drinksFirstLetter} failed!`);
  } catch (err) {
    'Error: ', err;
  }
};
getDrinksByFirstLetter().then((data) => console.log(data));

// const options3 = {
//   uri: 'www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka',

//   headers: {
//     accept: 'application/json',
//   },
//   json: true, // Automatically parses the JSON string in the response
// };

// const getIngredientByName = async () => {
//   try {
//     const IngredientByName = await request(options3);
//     return IngredientByName;
//   } catch (err) {
//     'Error: ', err;
//   }
// };
// getIngredientByName().then((data) => console.log(data));

// const options4 = {
//   uri: 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007',

//   headers: {
//     accept: 'application/json',
//   },
//   json: true, // Automatically parses the JSON string in the response
// };

// const getFullDrinksDetailsById = async () => {
//   try {
//     const fullDrinksDetailsById = await request(options4);
//     return fullDrinksDetailsById;
//   } catch (err) {
//     'Error: ', err;
//   }
// };
// getFullDrinksDetailsById().then((data) => console.log(data));

module.exports = {
  // getDrinksByNames,
  getDrinksByFirstLetter,
  // getIngredientsByName,
  // getDrinksDetailsById,
  // getRandomDrink,
  // getFilterDrinkAlcoholOrNon,
  // getCategory,
};
