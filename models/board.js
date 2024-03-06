const { DataTypes } = require("sequelize");

const BoardModel = (sequelize) => {
    return sequelize.define("board", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "planning",
        },
        deadline: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    });
};

module.exports = BoardModel;