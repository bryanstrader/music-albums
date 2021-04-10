const { Album, Artist, Track } = require('../models/conn');


class AlbumService {

    findOne = (AlbumId) => {
        const where = { AlbumId };
        return this.find(where, true);
    };

    findAll = () => {
        return this.find();
    };

    find = (where = {}, single = false) => {
        const attributes = [
            'AlbumId',
            'Title'
        ];

        let filter = {
            attributes,
            where,
            include: [{
                model: Artist,
                attributes: ['Name']
            }]
        };

        if (single)
            filter = {
                ...filter,
                include: [
                    ...filter.include,
                    {
                        model: Track,
                        attributes: ['Name', 'TrackId', 'Milliseconds']
                    }
                ]
            }

        const f = single ? Album.findOne(filter) : Album.findAll(filter);

        return f.then((result) => {
            return result;
        }).catch((err) => {
            console.log(err)
            return err;
        });
    }
}


module.exports = AlbumService;