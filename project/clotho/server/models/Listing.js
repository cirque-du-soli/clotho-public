module.exports = (sequelize, DataTypes) => {
    const Listing = sequelize.define("Listing", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sellerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sizeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genderId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        thumbnail: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        isSold: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    })

    Listing.associate = (models) => {
        Listing.belongsTo(models.User, {
            foreignKey: 'sellerId',
            as: 'seller'
        });
    };

    Listing.associate = (models) => {
        Listing.belongsTo(models.Category);
    };

    Listing.associate = (models) => {
        Listing.belongsTo(models.Gender);
    };

    Listing.associate = (models) => {
        Listing.belongsTo(models.Size);
    };

    Listing.associate = (models) => {
        Listing.hasOne(models.OrderItem, {
            foreignKey: 'listingId'
        });
    };

    return Listing;
};