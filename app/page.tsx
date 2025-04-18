import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>This is matching page.</h1>
            <Link href={`/match/solo/3*3*3`}>Match</Link>
        </div>
    )
}