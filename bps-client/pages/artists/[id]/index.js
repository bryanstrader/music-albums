import { BASE_URL } from '../../../utils/api'
import Link from 'next/link'
import ArtistAlbums from '../../../components/ArtistAlbums'
import Router from 'next/router'


const artist = ({ artist }) => {
    const returnHome = () => Router.push('/artists')
    return (
        <>
            <h1>{artist.Name}</h1>
            <br />
            <ArtistAlbums artistId={artist.ArtistId} />
            <br/>
            <button className="ui basic button" href="/artists" onClick={returnHome}>
                Go Back
            </button>
        </>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${BASE_URL}/artists/${context.params.id}`)
    const artist = await res.json()
    return {
        props: {
            artist,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${BASE_URL}/artists`)
    const artists = await res.json()
    const ids = artists.map(art => art.ArtistId);
    const paths = ids.map(ArtistId => ({ params: {id: ArtistId.toString()} }))
    return {
        paths,
        fallback: false
    }
}

export default artist