import "./Topbar.css"
import { AiFillLinkedin ,AiOutlineSearch} from "react-icons/ai"
import { FaInstagramSquare,FaGithubSquare } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../context/Context"
import Avatar from "react-avatar"

const Topbar = () => {

    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        });
    }
    const PF = "https://mern-blog-zedan.herokuapp.com/images/"

    return (
        <div className="topbar">
            <div className="topbar_left">
                <a href="https://www.linkedin.com/in/zedan-saheer-a0b25820a/" className="link"> <AiFillLinkedin className="topbar_left-icons" /></a>
                <a href="https://github.com/ZedanSaheer" className="link"> <FaGithubSquare className="topbar_left-icons" /></a>
                <a href="https://github.com/ZedanSaheer" className="link"> <FaInstagramSquare className="topbar_left-icons" /></a>
            </div>
            <div className="topbar_center">
                <ul className="topbar_center-list">
                    <Link to="/" className="link">
                        <li className="topbar_center-listItem">
                            HOME
                        </li>
                    </Link>
                    <Link className="link" to="/about">
                        <li className="topbar_center-listItem">
                            ABOUT
                        </li>
                    </Link>
                    <Link className="link" to="/write">
                        <li className="topbar_center-listItem">
                            {user && "WRITE"}
                        </li>
                    </Link>
                    <Link className="link" to="/">
                        <li className="topbar_center-listItem" onClick={handleLogout}>
                            {user && "LOGOUT"}
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="topbar_right">
                {user ?
                    (<Link className="link" to="/settings">
                        {user.profilePic ? (<img src={PF+user.profilePic} alt="profile" className="topbar_right-img" />) : (<Avatar name={user.username} size="30" className="avatar" round />)}
                    </Link>)
                    :
                    (
                        <ul className="topbar_center-list">
                            <li className="topbar_center-listItem">  <Link className="link" to="/login">LOGIN</Link></li>
                            <li className="topbar_center-listItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li> </ul>
                    )}
                <AiOutlineSearch className="topbar_right-searchIcon" />
            </div>
        </div>
    )
}

export default Topbar
