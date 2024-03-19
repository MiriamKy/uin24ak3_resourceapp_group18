import Resources from "./Resources"

export default function Layout({children}){
    return (
        <>
            <header>
                <Resources />
            </header>
            <main>
                {children} 
            </main>
        </>
    )
}