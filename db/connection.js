var Sequelize = require('sequelize');


//var sequelize = new Sequelize('foorumi', '', '', {
//    dialect: 'sqlite',
//    storage: 'db/database.sqlite'
});

var sequelize = new Sequelize('postgres://debqoredfowagh:LlQNFxD3CnQ94i4xBfTf-0gCB_@ec2-23-21-96-129.compute-1.amazonaws.com:5432/d96132ehfmqqj6', {
    dialect: 'postgres',
    protocol: 'postgres'
});

module.exports = {
    DataTypes: Sequelize,
    sequelize: sequelize
};
