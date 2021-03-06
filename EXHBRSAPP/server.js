const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
