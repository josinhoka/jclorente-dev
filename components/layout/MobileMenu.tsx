"use client";

import Link from "next/link";

import { useState } from "react";

const links = [

{
href:"/about",
label:"About"
},

{
href:"/projects",
label:"Projects"
},

{
href:"/experience",
label:"Experience"
},

{
href:"/contact",
label:"Contact"
}

];

export default function MobileMenu() {

const [

open,

setOpen

] = useState(false);

return (

<div
className="
md:hidden
"
>

<button

onClick={
()=>setOpen(
!open
)
}

className="
text-3xl

text-slate-200
"
>

☰

</button>

{

open && (

<div
className="
absolute

top-20

right-5

w-60

rounded-xl

bg-slate-900

border

border-slate-800

p-6

space-y-4

shadow-xl
"
>

{

links.map(
(
link
)=>(

<Link

key={
link.href
}

href={
link.href
}

onClick={
()=>setOpen(
false
)
}

className="
block

text-slate-300

hover:text-sky-400
"
>

{
link.label
}

</Link>

)
)

}

</div>

)

}

</div>

);

}