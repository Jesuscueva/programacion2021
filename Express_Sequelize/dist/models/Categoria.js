const { DataTypes } = require("sequelize")
const {conexion} =  require("../config/Sequelize")
const categoria_model = () => {
    return categoria = conexion.define(
        "categoria",
        {
            categoriaId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                field: "cat_id"
            },
            categoriaNombre: {
                type: DataTypes.STRING(45),
                unique: true,
                allowNull: false,
                field: "cat_nombre"
            },
        },{
            tableName: "t_categoria"
        }
    )
}

module.exports = categoria_model