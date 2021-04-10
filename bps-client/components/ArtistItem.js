import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArtistItem = ({ artist }) => {
    return (
        <Link href="artists/[id]" as={`/artists/${artist.ArtistId}`}>
            <a className={articleStyles.card}>
                <h3>{artist.Name} &rarr;</h3>
                <p>{artist.Name}</p>
            </a>
        </Link>
    )
}

export default ArtistItem