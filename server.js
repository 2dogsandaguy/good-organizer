  const express = require("express");
  const path = require("path");
  
  const app = express();
  const PORT = process.env.PORT || 3001;
  
  const routes = require("./routes/routes");
  
  app.use(express.static(path.join(__dirname, "./public")));
  
  app.use("/", routes);
  
  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );
  