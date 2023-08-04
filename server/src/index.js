const express = require("express");
const UserRoutes = require("./routes/users")
const ProductRoutes = require("./routes/products")

const cors = require('cors')

const connectDb = require("./db/connection")
const app = express();

require('dotenv').config()

app.use(cors())
app.use(express.json());
app.use(UserRoutes)
app.use(ProductRoutes)

connectDb();

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
