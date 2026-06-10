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

<>

<button

onClick={()=>
setOpen(
!open
)
}

className="
md:hidden

text-3xl

text-slate-200
"

>

☰

</button>

{

open && (

<>

<div

onClick={()=>
setOpen(
false
)
}

className="
fixed

inset-0

bg-black/40

z-40
"
/>

<div

className="
fixed

top-20

left-5

right-5

rounded-2xl

bg-slate-900

border

border-slate-800

p-6

space-y-6

z-50
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

onClick={()=>
setOpen(
false
)
}

className="
block

text-xl

text-slate-200

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

</>

)

}

</>

);

}