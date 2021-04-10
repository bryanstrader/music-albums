const { Artist, Album } = require('../models/conn');


class ArtistService {

    findOne = (ArtistId) => {
        const where = { ArtistId };
        return this.find(where, true);
    };

    findAll = () => {
        return this.find();
    };

    find = (where = {}, single = false) => {
        const attributes = [
            'ArtistId',
            'Name'
        ];

        const filter = {
            attributes,
            where
        };

        const f = single ? Artist.findOne(filter) : Artist.findAll(filter);

        return f.then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }

    findArtistAlbums = (ArtistId) => {
        return Album.findAll({
            attributes :[
                'AlbumId',
                'Title'
            ],
            where :{
                ArtistId
            }
        }).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }
}


module.exports = ArtistService;