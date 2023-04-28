const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thoughts.deleteMany({});
  // await User.deleteMany({});

  const users = [10];
  const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = username+'@test.com';
  
    users.push({
      username,
      email
    });
  }

  // await User.collection.insertMany(users);
  await Thoughts.collection.insertMany(thoughts);

  // loop through the saved thoughts, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
