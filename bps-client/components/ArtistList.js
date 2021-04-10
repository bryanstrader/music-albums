import articleStyles from '../styles/Article.module.css'
import ArtistItem from './ArtistItem';

const ArtistList = ({ artists }) => {
    return (
        <div className={articleStyles.grid}>
            {artists.map((art) => (
                <ArtistItem key={art.ArtistId} artist={art} />
            ))}
        </div>
    )
}

export default ArtistList