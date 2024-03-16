require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./api/config/database");
const userRoutes = require("./api/v1/routes/user.routes");
const errorHandler = require("./api/middleware/error.middleware");
const logger = require("./api/middleware/logger.middleware");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use("/api/v1/users", userRoutes);
app.use(errorHandler);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Error in database connection:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
