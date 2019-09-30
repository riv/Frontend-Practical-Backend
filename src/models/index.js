const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'db',
    'postgres',
    '',
    {
        dialect: 'postgres',
    },

);

const models = {
    User: sequelize.import('./user'),
    Auction: sequelize.import('./auction'),
};

Objects.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

//export { sequelize };

modules.exports = {
    sequelize,
    models,
}