const { Activity } = require('../models');

const activityData = [
    {
      "title": "Wall Sit",
      "repetition": 15,
      "image": 'wall-sit.jpeg',
      "set": 2,
    },
    {
      "title": "Push-Ups",
      "repetition": 12,
      "image": 'push-ups.jpeg',
      "set": 3,
    },
    {
      "title": "Donkey Kicks",
      "repetition": 8,
      "image": 'donkey-kicks.jpeg',
      "set": 2,
    },
    {
      "title": "Inch Worm",
      "repetition": 10,
      "image": 'inch-worms.jpeg',
      "set": 3,
    },
    {
      "title": "Dead Bug",
      "repetition": 6,
      "image": 'dead-bug.jpeg',
      "set": 2,
    }
  ]

const seedActivity = () => Activity.bulkCreate(activityData);

module.exports = seedActivity;