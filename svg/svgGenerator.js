const card_1 = require("./card_1");
const card_2 = require("./card_2");
const card_3 = require("./card_3");

const svgGenerator = (cardId, svgParams) => {
  switch (cardId) {
    case "card_1":
      return card_1(svgParams);
    case "card_2":
      return card_2(svgParams);
    case "card_3":
      return card_3(svgParams);
  }
};

module.exports = svgGenerator;
