const express = require("express");
const mongoose = require("mongoose");
const birdRouter = require("./routes/BirdRoutes");
const swaggerUI = require('swagger-ui-express');
const swagger = require('./swagger.json');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/birds", birdRouter);

app.use(
  '/swagger',
  swaggerUI.serve,
  swaggerUI.setup(swagger, { explorer: true })
);

//configure mongoose
mongoose.connect(
  'mongodb://localhost:27017/swagger',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});

module.exports = app;
