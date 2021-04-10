import articleStyles from '../styles/Article.module.css'
import AlbumItem from './AlbumItem';

const AlbumList = ({ albums }) => {
    return (
        <div className={articleStyles.grid}>
            {albums.map((alb) => (
                <AlbumItem key={alb.AlbumId} album={alb} />
            ))}
        </div>
    )
}

export default AlbumList