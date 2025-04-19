import Link from "next/link";

const StandingLayout = ({
    children,
}:{
    children : React.ReactNode;
}) => {
    return (
        <>
            <nav>
                <Link href={'/WorldCup/team'}>Team</Link>
                <Link href={'/WorldCup/individual'}>Individual</Link>
            </nav>
            {children}
        </>
    )
}

export default StandingLayout;