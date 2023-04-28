const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Grace',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughtBodies = [
    'What a great day!',
    'Lost my Phone, can somebody call me?',
    'I want to Learn to play the Piano',
    'I love the gameStarbase Defender',
    'Tower Defense is a great game',
    'Monopoly is the worst dont@ me',
    'Movie trailers get me so hyped',
    'Hello world',
    'This is a Stupid Social Media App',
    'Why dont I ever take Notes',
    'You have 50 unread Messages',
    'Email is a great way to communicate',
    'Compass is an application that runs with Mongodb',
    'Firefox is one of the OG browsers',
    'Is your app running?',
    'Well you better go catch it!',
    'Poker? I barely know her!',
    'Deliveries are on their way',
  ];
  
  const possibleReactions = [
    'Wow',
    'Awesome!',
    'Great',
    'A+',
    'lets go',
    'Thats very cool',
    'I dont like that',
    'gross',
    'good job',
    'thanks',
    'yikes',
    'weird',
    'dumb',
    'smart',
    'lame',
  ];
  
  const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random applications that we can add to the database. Includes application tags.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtBodies),
        username: getRandomName(),
        reactions: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  // Create the tags that will be added to each application
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(possibleReactions),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts };
  