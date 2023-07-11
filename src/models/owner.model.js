module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'owners',
    underscored: true,
  });

  Owner.associate = (models) => {
    Owner.hasMany(models.Pet,
      { foreignKey: 'ownerId', as: 'pets' });
  };

  return Owner;
};