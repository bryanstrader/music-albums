import AlbumList from '../components/AlbumList'
import { BASE_URL } from '../utils/api'

export default function albums({ albums }) {
    return (
        <>
            <AlbumList albums={albums} />
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${BASE_URL}/albums`)
    const albums = await res.json()
    return {
        props: {
            albums
        }
    }
}
