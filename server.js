const app = require("./src/app");

const connectToDatabase = require("./src/db/db");

connectToDatabase();

app.listen(3000, () => {
  console.log("Server Started");
});
