import articleStyles from '../styles/Article.module.css'
import Router from 'next/router'

const AlbumItem = ({ album }) => {
    const goToAlbum = () => Router.push(`/albums/${album.AlbumId}`)
    return (
        <div className={articleStyles.card} onClick={goToAlbum}>
            <h3>{album.Title}</h3>
            <p>{album.artist.Name}</p>
        </div>
    )
}

export default AlbumItem