import Link from "next/link";

export default function ProfilePage() {
    return (
        <>
            <h1>This is Profile Page</h1>
            <Link href="/profile/name" passHref>to Name</Link>
        </>
    )
};