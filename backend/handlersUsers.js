'use strict';

//require Mongodb
const { MongoClient } = require('mongodb');

//get URI
const dotenv = require('dotenv');

dotenv.config();

//{ path: "./server/.env" }
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db('drinks');
  const result = await db.collection('users').find().toArray();
  client.close();

  result
    ? res.status(200).json({ status: 200, response: result })
    : res.status(404).json({ status: 404, message: 'Not Found' });
};
const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db('drinks');
  const result = await db.collection('users').findOne({ id: req.params.id });

  result
    ? res.status(200).json({ status: 200, data: result })
    : res.status(404).json({ status: 404, data: 'Not Found' });

  client.close();
};

//check if user exists at login and add the user if doesnt exist
const addUser = async (req, res) => {
  const user = req.body;
  console.log('handler user', user);
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  console.log('connected!');
  const db = client.db('drinks');

  const checkId = { _id: user.user.sub };
  const update = {
    $set: {
      _id: user.user.sub,
      given_name: user.user.given_name,
      family_name: user.user.family_name,
      nickname: user.user.nickname,
      name: user.user.name,
      picture: user.user.picture,
      locale: user.user.locale,
      updated_at: user.user.updated_at,
      email: user.user.email,
      email_verified: user.user.email_verified,
    },
  };
  const upsert = { upsert: true };
  const result = await db
    .collection('users')
    .updateOne(checkId, update, upsert);

  client.close();
  console.log('disconnected!');

  result.modifiedCount === 0
    ? res.status(201).json({
        status: 201,
        data: user.user.sub,
        message: 'User added to MongoDb!',
      })
    : res.status(404).json({ status: 404, message: 'User was already added!' });
};
const updatingFavourites = async (req, res) => {
  let favArray = [];
  console.log('favourites');
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db('drinks');
  const result = await db
    .collection('users')
    .findOne({ email: req.query.email });
  console.log(result);
  if (!result.favourites || result.favourites.length === 0) {
    favArray = [{ id: req.query.id, comment: '' }];
  } else if (result.favourites.some((el) => el.id === req.query.id)) {
    favArray = result.favourites.filter((el) => el.id !== req.query.id);
  } else {
    favArray = [...result.favourites, { id: req.query.id, comment: '' }];
  }
  const updatedResult = await db
    .collection('users')
    .updateOne({ email: req.query.email }, { $set: { favourites: favArray } });

  client.close();

  // console.log('whats going on', updatedResult);
  updatedResult.modifiedCount === 1
    ? res
        .status(200)
        .json({ status: 200, data: favArray, message: 'updated faves' })
    : res.status(404).json({ status: 404, data: 'Not Found' });
};

const updatingComments = async (req, res) => {
  const { comment, id } = req.body;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db('drinks');

  const result = await db
    .collection('users')
    // .updateOne({ email: email }, { $set: { id: id, comment: comment } });
    // .updateOne(
    //   { email: email },
    //   { $set: favArray[{ id: id, comment: comment }] }
    // );
    .updateOne(
      { email: email },
      { $push: { favourites: { id: id, comment: comment } } }
    );

  result.modifiedCount === 1
    ? res
        .status(200)
        .json({ status: 200, data: comment, message: 'updated comment' })
    : res.status(404).json({ status: 404, data: 'Not Found' });

  client.close();
};

// export handler function
module.exports = {
  getUsers,
  getUser,
  addUser,
  updatingFavourites,
  updatingComments,
};
// await db
//       .collection("users")
//       .findOneAndUpdate({ email: email }, { $push: { orderId: newOrderId } });
// await db
//           .collection("items")
//           .findOneAndUpdate(
//             { _id: id },
//             { $set: { numInStock: newInventory } }
//           );
