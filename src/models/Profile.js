const { Model, DataTypes } = require('sequelize')

class Profile extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Profile