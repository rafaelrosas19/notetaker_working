const { Sequelize } = require("sequelize");
module.exports = new Sequelize("wendi", "root", "@Rr62508874!", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});
