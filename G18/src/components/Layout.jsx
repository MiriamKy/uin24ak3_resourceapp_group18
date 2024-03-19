import Navtest from "./Navtest"

export default function Layout({children}){
    return (
        <>
            <header>
                <Navtest />
            </header>
            <main>
                {children} 
            </main>
        </>
    )
}