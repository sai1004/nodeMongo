const express = require("express");

const router = express.Router();

router.get('/posts', (req, res) => {
  res.send('we re on posts');
});

// router.get("/specific", (req, res) => {
//   res.send("Specific post");
// });

module.exports = router;
