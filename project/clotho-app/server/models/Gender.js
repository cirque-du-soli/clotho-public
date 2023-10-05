module.exports = (sequelize, DataTypes) => {

    const Gender = sequelize.define("Gender", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    });
    
    Gender.associate = (models) => {
        Gender.hasMany(models.Listing, {
            foreignKey: 'genderId'
        });
    };

    return Gender;
};