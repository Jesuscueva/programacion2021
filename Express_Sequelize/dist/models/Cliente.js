const {DataTypes} = require("sequelize")
const {conexion} = require("../config/Sequelize")

module.exports = cliente_model =  () => {
    return conexion.define(
        "cliente",
        {
            clienteDni: {
                type: DataTypes.STRING(9),
                primaryKey: true,
                allowNull: false,
                unique: true,
                field: "cli_dni"
            },
            clienteNombre: {
                type: DataTypes.STRING(45),
                allowNull: false,
                field: "cli_nombre"
            },
            clienteDireccion: {
                type: DataTypes.STRING(45),
                allowNull: false,
                field: "cli_direccion"
            },
            clienteFono: {
                type: DataTypes.STRING(20),
                allowNull: false,
                field: "cli_fono"
            }
        },
        {
            tableName: "t_cliente"
        }
    )
}