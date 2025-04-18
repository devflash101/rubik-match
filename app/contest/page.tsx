'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ContestPage = () => {
    const [contestType, setContestType] = useState(0);
    const router = useRouter();
    return (
        <div>
            <div>This is Contest {contestType} Page</div>
            <button onClick={() => router.push('/match/multi/4*4')}>Match</button>
        </div>
    )
};

export default ContestPage;