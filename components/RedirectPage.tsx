"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {

    source: string;

}

export default function RedirectPage({ source }: Props) {

    const router = useRouter();

    useEffect(() => { 
        const timer = setTimeout(() => { router.push("/");} ,500 );
        return () => clearTimeout(timer); 
    }, [router]);

    return (
        
        <div className="
        min-h-[70vh]
        flex
        items-center
        justify-center
        text-slate-400
        ">
            Redirecting from:
            &nbsp;
            <strong>
                {source}
            </strong>
            …
        </div>
    );

}