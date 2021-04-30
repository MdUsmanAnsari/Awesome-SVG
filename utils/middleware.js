const convertStringToCssFormat = (style) => {
  if (Array.isArray(style)) style = style.join(";");

  const formatedStyle = {};
  const splitedString = style.split(";");

  splitedString.forEach((str) => {
    const [key, value] = str.split(":");
    formatedStyle[key] = value;
  });
  return formatedStyle;
};

const defaultStyle = (style) => {
  const { backgroundColor, nameColor, summaryColor } = style || {};

  return {
    backgroundColor: backgroundColor || "#eee",
    nameColor: nameColor || "#111",
    summaryColor: summaryColor || "#1d1d1d",
  };
};

const formatRequest = (req, res, next) => {
  const query = req.query;
  if (query.style) {
    query.style = convertStringToCssFormat(query.style);
  }
  query.style = defaultStyle(query.style);
  next();
};

module.exports = { formatRequest };
