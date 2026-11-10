module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define(
    "Komik",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "komik",
      freezeTableName: true,
      timestamps: false,
    },
  );

  return Komik;
};
