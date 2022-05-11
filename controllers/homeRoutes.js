const router = require("express").Router();
const { Project, User, Code } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});
//route for login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

//route for signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/project/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render("project", {
      ...project,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET route for code snippet
router.get("/codes", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ["password"]},
      include: [{model: Code}]
    })
    const user = userData.get({ plain: true });

    res.render("codeSnippet", {
      ...user,
      loggedIn: true,
  });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
