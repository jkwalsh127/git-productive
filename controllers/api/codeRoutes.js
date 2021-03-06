const router = require("express").Router();
const { Code } = require("../../models");
const withAuth = require("../../utils/auth");



//create new code snippet
router.post("/", withAuth, async (req, res) => {

  try {
    const newSnippet = await Code.create({
      title: req.body.title,
      content: req.body.content,
      description: req.body.description,
      user_id: req.session.user_id,
    });
    res.render('codeSnippet');
    
    // res.status(200).json(newSnippet);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update an existing code snippet
router.put("/:id", withAuth, (req, res) => {
  Code.update(
    {
      //sections for updating
      title: req.body.title,
      content: req.body.content,
    },
    {
      //by the id
      where: {
        id: req.params.id,
      },
    }
  )
    .then((codeData) => {
      //if there is no data by that id, send message
      if (!codeData) {
        res.status(404).json({ message: "No code snippet found." });
        return;
      }
      //post results
      res.json(codeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete a code snippet
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const codeData = await Code.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    //if no code data found, send error message
    if (!codeData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }
    res.render('codeSnippet');

    // res.status(200).json(codeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
