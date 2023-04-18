const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'postgres',
    'postgres',
    '12345',
    {
        host: '127.0.0.1',
        port: '5433',
        dialect: 'postgres',
    }
);

module.exports = sequelize;
