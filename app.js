const express = require("express");
const cardAPI = require("./api/card");
const { formatRequest } = require("./utils/middleware");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Format the request data
app.use(formatRequest);

app.use(cardAPI);

app.use("/", (req, res, next) => {
  res.send("Welcome to Awesome SVG 😍");
});

app.listen(5000, () => {
  console.log("listening at port: 5000");
});
