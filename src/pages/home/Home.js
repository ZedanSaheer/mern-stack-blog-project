import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./Home.css"
import axios from "axios"
import { useLocation } from "react-router"

const Home = () => {

    const [posts,setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("/posts"+search);
            setPosts(response.data)
        }
        fetchPosts();
    }, [search])

    return (
        <>
         <Header/>
        <div className="home">
           <Posts posts={posts}/>
           <Sidebar/>
        </div>
        </>
    )
}


export default Home
