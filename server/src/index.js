const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 3003;
const HOST = "0.0.0.0";

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/controller/groupsController")(app);

app.listen(PORT, HOST, () => {
  console.log(`Server listening on port ${PORT} and host ${HOST}`);
});
