const Sequelize = require('sequelize');
const db = require('../util/database');

const Offer = db.define('offer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    item: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    endDate: Sequelize.DATE,
});

module.exports = Offer;