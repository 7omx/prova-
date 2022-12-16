// importar sequelize
const Sequelize = require('sequelize');

const db = require('./db');



// criar a tabela produtos
const Products = db.define('products',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});



// Verifica
Products.sync();

module.exports = Products;