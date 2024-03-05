sequelize.sync().then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Error in database connection:", error);
  });