import { useEffect, useState } from "react"

export default function Map({posts}){

    const [post, setPosts] = useState([])

    useEffect(() => {
        setPosts(posts.map(item => {
            console.log(item);
        }))
    }, [])

return(
    <section>
        <h1>title</h1>
        <p>category</p>
        <a href="#">url</a>

    </section>
)

}

