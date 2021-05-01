const imageToBase64 = require("./../utils/image_to_base64");
const card_1 = require("./card_1");
const card_2 = require("./card_2");
const card_3 = require("./card_3");

const svgGenerator = async (cardId, svgParams) => {
  switch (cardId) {
    case "card_1":
      return card_1(svgParams);
    case "card_2":
      return card_2(svgParams);
    case "card_3":
      if (!svgParams.userPic) {
        svgParams.userPic =
          "https://avatars.githubusercontent.com/u/40880948?v=4";
      }
      svgParams.userPic = await imageToBase64(svgParams.userPic);
      return card_3(svgParams);
  }
};

module.exports = svgGenerator;
