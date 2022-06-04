const { MongoClient } = require('mongodb');
const users = require('./Data/Users.json');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db('drinks');
    await db.collection('users').insertMany(users);

    client.close();
    console.log('success');
  } catch (err) {
    console.log(err);
  }
};

batchImport();
