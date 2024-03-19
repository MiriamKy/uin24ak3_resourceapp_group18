

export default function Layout({children}){
    return(
    <div id="container">
        <Navbar />
        {children}
    </div>
    )
}