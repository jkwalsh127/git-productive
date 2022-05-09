//required packages
const routes = require("./controllers");
const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const session = require("express-session");
const helpers = require("./utils/helpers");
const path = require("path");

const app = express();

//use custom helpers with handlebars
const hbs = exphbs.create({ helpers });

//set port for local and deployed
const PORT = process.env.PORT || 3001;

//setup of the database dependent on the models
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//set up sessions
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};


//middleware 
app.use(session(sess));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

//tells what template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


//connection from server to database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
  });