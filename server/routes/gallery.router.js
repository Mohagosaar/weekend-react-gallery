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
router.put("/:id", (req, res) => {
  console.log(req.params);
  let queryText = `
  UPDATE "gallery" set "likes" = +1
  WHERE "id" = $1;
  `;
  pool
    .query(queryText, [true, req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
