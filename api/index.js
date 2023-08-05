const server = require("./src/app.js");
require("dotenv").config();
const { PORT } = process.env;

const { conn} = require('./src/db.js');


//Comentario de ejemplooooooooooo

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("listening at port ", PORT);
  });
});
