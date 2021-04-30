const express = require("express");
const svgGenerator = require("./../svg/svgGenerator");
const router = express.Router();

// Card API
router.get("/card/:cardId", (req, res) => {
  const { cardId } = req.params;
  const svgParams = req.query;

  const resSVG = svgGenerator(cardId, svgParams);
  // Setting SVG type Header
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(resSVG);
});

module.exports = router;
