const { Code } = require("../models");

const codeData = [
  {
    title: "Sequelize Store Data",
    description: "Sets up the databnase dependent on the models",
    content: 'const SequelizeStore = require("connect-session-sequelize")(session.Store);',
    user_id: 1
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
      }`,
    user_id: 1
  },
  {
    title: "Write To File",
    description: 'This function is used to write a file to a specific database',
    content: `function writeFile(fileName, data) {
        return fs.writeFileSync(fileName, data);
      }`,
    user_id: 1
  }
];

const seedCodes = () => Code.bulkCreate(codeData);

module.exports = seedCodes;
