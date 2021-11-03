import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../utils/api'
import articleStyles from '../styles/Article.module.css'
import Router from 'next/router'

const ArtistAlbums = ({ artistId }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        fetch(`${BASE_URL}/artists/${artistId}/albums`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false)
                setData(data)
            })
            .catch((e) => {
                setLoading(false);
                setError('fetch failed');
            })
    }, [])

    const goToAlbum = ({ currentTarget }) => Router.push(`/albums/${currentTarget.getAttribute('data-key')}`)
    
    return (

        <div className="ui one column stackable center aligned page grid">
            <div className="column sixteen wide">
                {data && data.map((album) => (
                    <div key={album.AlbumId} data-key={album.AlbumId} className={articleStyles.card} onClick={goToAlbum}>
                        {album.Title}
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ArtistAlbums