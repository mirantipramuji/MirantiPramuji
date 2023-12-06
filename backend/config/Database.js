import {Sequelize} from "sequelize";

const db = new Sequelize('crud_50421817_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;