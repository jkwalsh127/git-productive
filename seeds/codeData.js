const { Code } = require("../models");

const codeData = [
  {
    title: "Sequelize Store Data",
    description: "Sets up the databnase dependent on the models",
    content: 'const SequelizeStore = require("connect-session-sequelize")(session.Store);',
  },
  {
    title: "Set Up Sessions",
    description: 'This code is for storing specific data for the user so it is not saved in the code.',
    content: `const sess = {
        secret: "Super secret secret",
        cookie: {},
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
          db: sequelize,
        }),
      }`
  },
  {
    title: "Write To File",
    description: 'This function is used to write a file to a specific database',
    content: `function writeFile(fileName, data) {
        return fs.writeFileSync(fileName, data);
      }`,
  },
];

const seedCodes = () => Activity.bulkCreate(codeData);

module.exports = seedCodes;
