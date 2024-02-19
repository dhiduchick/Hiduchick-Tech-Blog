const { Model, DataTypes} = require('sequelize');
const bycrpt = require('bycrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bycrpt.compareSync(loginPw, this.password);
    }
}

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [8],
            },
        },
    },
{
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bycrpt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bycrpt.has(updatedUserData.password, 10);
            return updatedUserData;
        },
    },

    sequelize,
    timestaps: false,
    freezeTableNam: true,
    underscoed: true,
    modelName: 'user',
}
);

module.exports = User; 
