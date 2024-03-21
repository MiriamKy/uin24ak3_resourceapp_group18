import React from "react"; // Router-dom? eller en linje til?

export default function Layout({children}){

    return (
        <>
            <section>
               {children}
            </section>
        </>
    )
}
