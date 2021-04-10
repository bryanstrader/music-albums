import { BASE_URL } from '../../../utils/api'
import Router from 'next/router'
import TrackStyles from '../../../styles/Track.module.css'

const albums = ({ album }) => {
    const returnHome = () => Router.back();
    return (
        <>
            <h1>{album.Title}</h1>
            <br />
            {album.tracks.map(track => (
                <div className={TrackStyles.track} key={track.TrackId}>
                    {track.Name}
                </div>
            ))}
            <br/>
            <button className="ui basic button" href="/artists" onClick={returnHome}>
                Go Back
            </button>
        </>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${BASE_URL}/albums/${context.params.id}`)
    const album = await res.json()
    return {
        props: {
            album,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${BASE_URL}/albums`)
    const albums = await res.json()
    const ids = albums.map(alb => alb.AlbumId);
    const paths = ids.map(AlbumId => ({ params: {id: AlbumId.toString()} }))
    return {
        paths,
        fallback: false
    }
}

export default albums