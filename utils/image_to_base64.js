const axios = require("axios");

const imageToBase64 = async (imageURL) => {
  let image = await axios.get(imageURL, { responseType: "arraybuffer" });
  let raw = Buffer.from(image.data).toString("base64");
  return "data:" + image.headers["content-type"] + ";base64," + raw;
};

module.exports = imageToBase64;
