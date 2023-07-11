module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    ownerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'pets',
    underscored: true,
  });

  Pet.associate = (models) => {
    Pet.belongsTo(models.Owner,
      { foreignKey: 'ownerId', as: 'owners' });
  };

  return Pet;
};