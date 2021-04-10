module.exports = (sequelize, type) => {
	return sequelize.define('track', {
		TrackId: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		Name: type.STRING,
        AlbumId: {
			type: type.INTEGER
        } 
	}, {
		tableName: 'tracks',
        timestamps: false,
	})
};