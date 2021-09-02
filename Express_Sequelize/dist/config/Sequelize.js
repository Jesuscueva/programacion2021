const {Sequelize} = require("sequelize")


const conexion = new Sequelize(
    "minimarket2",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql",
        timezone: "-05:00", //para auditoria
        dialectOptions:{
            //  Sirve para el momento de mostrar fechas, automaticamente las vuelva string
            dateString: true
        }
    }
)


module.exports = {
    conexion
}