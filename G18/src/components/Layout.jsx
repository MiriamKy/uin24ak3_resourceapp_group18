import React from "react";

// I Layout-komponentet har vi:
// - Brukt "children"-propen for å hente barneelementene til Layout og returnere dem inn i html-strukturen
// - React forstår at "children" refererer til komponentene Resources og Home; fordi Layout-tagene(??) i App.jsx-filen har "pakket disse inn"

export default function Layout({children}){

    return (
        <>
            <section>
               {children}
            </section>
        </>
    )
}
