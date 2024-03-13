import Navtest from "./Navtest"

export default function Layout({children}){
    return (
        <>
            <header>
                <h1>Layout</h1>
                <Navtest />
            </header>
            <main>
            {children}
            </main>
        </>
    )
}