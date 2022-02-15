const express = require("express");
const dotenv = require("dotenv");
const { catchErrors, routeNoteFound } = require("./errors/errorsHandler");
const connecDb = require("./config/db");
dotenv.config();
connecDb();

const app = express();

app.use(express.json());

app.use("/api/products", require("./routes/product.routes"));
app.use("/api/categories", require("./routes/category.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use(
  "/api/users",
  require("./filters/jwtFilter"),
  require("./routes/user.routes")
);
app.use(routeNoteFound);
app.use(catchErrors);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
