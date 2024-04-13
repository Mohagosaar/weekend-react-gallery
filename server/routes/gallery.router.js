const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");
// GET /gallery
router.get("/", (request, response) => {
  let queryTex = `SELECT * FROM gallery ORDER BY id;`;
  pool
    .query(queryTex)
    .then((result) => {
      response.send(result.rows);
    })
    .catch((error) => {
      console.log("error in query", error);
      response.sendStatus(500);
    });
  // code here
});

// PUT /gallery/like/:id
router.put("/like/:id", (req, res) => {
  // code here
});

module.exports = router;
