'use client';

import { useSelectedLayoutSegment } from "next/navigation";

export default function WorldCupLayout({
    children,
    standing,
} : {
    children: React.ReactNode,
    standing: React.ReactNode
}) {
    const standingSegment = useSelectedLayoutSegment('standing');
    console.log(standingSegment);
    return (
        <section>
              {children}
              {standing}
        </section>
    )
}