import Link from "next/link";

export default function NotFound() {

    return (

        <main className="
            min-h-[70vh]
            flex
            flex-col
            
            items-center
            justify-center
            
            text-center
            
            px-6
            ">
                <p className="
                    text-sky-400
                    uppercase
                    tracking-widest
                    ">
                        404
                </p>
                
                <h1 className="
                    mt-6
                    text-5xl
                    font-bold
                    ">
                        Page not found
                </h1>

                <p className="
                    mt-6
                    text-slate-400
                    max-w-lg
                    ">
                        The page you are looking for
                        does not exist or has moved.
                </p>
                
                <Link href="/" className="
                    mt-10
                    px-6
                    py-3
                    rounded-lg
                    bg-sky-500
                    hover:bg-sky-400
                    transition
                    ">
                        Back to portfolio
                </Link>
        </main>

    );

}