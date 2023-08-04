const server = require("./src/app.js");
require("dotenv").config();
const { PORT } = process.env;
const { conn} = require('./src/db.js');
const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;



conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("listening at port ", PORT);
  });
});
