const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            login: DataTypes.STRING,
            password: DataTypes.STRING,
            confirmpassword: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Profile, { foreignKey: 'profile_id', as: 'profiles'});
    }
}

module.exports = User