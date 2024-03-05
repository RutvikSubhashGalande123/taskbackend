require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./api/config/database"); 
const userRoutes = require("./api/v1/routes/user.routes");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/users", userRoutes);

sequelize.sync().then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Error in database connection:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
