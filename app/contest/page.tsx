// 'use client';
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

const ContestPage = async () => {
    // const [contestType, setContestType] = useState(0);
    // const router = useRouter();
    const res = await fetch('/api', { cache: 'no-store' });
    const json = await res.json();

    return (
        <div>
            {/* <div>This is Contest {contestType} Page</div> */}
            {/* <button onClick={() => router.push('/match/multi/4*4')}>Match</button> */}
            <p>API Response: {json}</p>
        </div>
    )
};

export default ContestPage;