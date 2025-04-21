import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>This is Home page.</h1>
            <Link href={`/match/solo/3*3*3`}>goto Match</Link>
            <Link href={`/profile`}>goto Profile</Link>
        </div>
    )
}