const Sequelize = require('sequelize');

const auction = (sequelize, DataTypes) => {
    const Auction = sequelize.define('auction', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      photo: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.String,
      },
      start_ts: {
        type: DataTypes.DATE,
      },
      time: {
        type: DataTypes.INTEGER,
        defaultValue: 600,
      },
    });
    Auction.associate = models => {
      Auction.belongsTo(models.User);
    };
    return Auction;
  };
  
module.exports = auction;
  