const Sequelize = require('sequelize');

const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      fname: {
        type: DataTypes.STRING,
      },
      lname: {
        type: DataTypes.STRING,
      },
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
      },
    });
    User.associate = models => {
      User.hasMany(models.Auction, { onDelete: 'CASCADE' });
    };
    return User;
  };

module.exports = user;