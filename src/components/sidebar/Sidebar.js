import "./Sidebar.css"
import { AiFillLinkedin } from "react-icons/ai"
import { FaInstagramSquare,FaGithubSquare } from "react-icons/fa"
import { useEffect, useState } from "react"
import instance from "../../axios"
import { Link } from "react-router-dom"
import myself from "./media/zedan.png"

const Sidebar = () => {

    const [cats,setCat] = useState([]);

    useEffect(()=>{
        const getCat = async () =>{
            const response = await instance.get("/categories");
            setCat(response.data)
        }
        getCat();
    },[])

    return (
        <div className="sidebar">
          <Link className="link" to="/about">
          <div className="sidebar_item">
                <span className="sidebar_title">About me</span>
                <img src={myself} alt="Myself" className="sidebar_item-img" />
                <p>Hello I'm Zedan Saheer , A passionate full stack developer , Motivational speaker , content creator and above all a faithful muslim.</p>
                <span className="sidebar_item_click">want to know more about me?</span>
            </div>
          </Link>
            <div className="sidebar_item">
                <span className="sidebar_title">Categories</span>
                <ul className="sidebar_list">
                   {cats.map((cat)=>(
                   <Link to={`/?cat=${cat.name}`} className="link" key={cat._id}><li className="sidebar_listItem">{cat.name}</li></Link>
                   ))}
                </ul>
            </div>
            <div className="sidebar_item">
                <span className="sidebar_title">Follow us</span>
                <ul className="sidebar_list">
                    <li className="sidebar_listItem">
                       <a href="https://www.linkedin.com/in/zedan-saheer-a0b25820a/" className="link"> <AiFillLinkedin className="sidebar_listItem-icon"/></a>
                    </li>
                    <li className="sidebar_listItem">
                    <a href="https://github.com/ZedanSaheer" className="link"> <FaGithubSquare className="sidebar_listItem-icon"/></a>
                    </li>
                    <li className="sidebar_listItem">
                    <a href="https://github.com/ZedanSaheer" className="link"> <FaInstagramSquare className="sidebar_listItem-icon"/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
