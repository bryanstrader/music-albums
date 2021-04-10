import Head from 'next/head'
import ArtistList from '../components/ArtistList'
import { BASE_URL } from '../utils/api'

export default function artists({ artists }) {
    return (
        <>
            <ArtistList artists={artists} />
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${BASE_URL}/artists`)
    const artists = await res.json()
    return {
        props: {
            artists
        }
    }
}
