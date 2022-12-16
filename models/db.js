
const Sequelize = require('sequelize');

const sequelize = new Sequelize('tom', 'root', '6969', {
    host: 'localhost',
    dialect: 'mysql'
});





// testar a conexão com bd
sequelize.authenticate()
.then(function(){
    console.log("deu bom");
}).catch(function(){
    console.log("nao deu bom");
});





 // conexão
module.exports = sequelize;