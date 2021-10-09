import "./Topbar.css"
import { AiFillLinkedin } from "react-icons/ai"
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/Context"
import Avatar from "react-avatar"
import logo from "./zs.png"
import axios from "axios"

const Topbar = () => {

    const { user, dispatch } = useContext(Context);
    const [toggle, setToggle] = useState(false);
    const [image, setImage] = useState(false);
    const PF = "https://mern-blog-zedan.herokuapp.com/images/";

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        });
    }


    useEffect(() => {
        const getUser = async () => {
            try {
                await axios.get(PF + user.profilePic);
                setImage(true);
            } catch (error) {           
                setImage(false);
            }
        }
        getUser();
    }, [user.profilePic])

    return (
        <>
            <div className="topbar-sm">
                <div className={toggle ? `topbar-menu active` : `topbar-menu`} onClick={() => setToggle(value => !value)}>
                    <div className={toggle ? `topbar-menu-top active` : `topbar-menu-top`}></div>
                    <div className={toggle ? `topbar-menu-middle active` : `topbar-menu-middle`}></div>
                    <div className={toggle ? `topbar-menu-bottom active` : `topbar-menu-bottom`}></div>
                </div>
                {!toggle && (<Link to="/" className="link">
                    <li className="topbar_center-listItem sm">
                        HOME
                    </li>
                </Link>)}
                {!toggle && (user && (<Link className="link" to="/write">
                    <li className="topbar_center-listItem sm">
                        WRITE
                    </li>
                </Link>))}
                <img src={logo} alt="logo" className="topbar-sm-logo" />
            </div>
            <div className={toggle ? `topbar active` : `topbar close`}>
                <div className="topbar_left">
                    <a href="https://www.linkedin.com/in/zedan-saheer-a0b25820a/" className="link"> <AiFillLinkedin className="topbar_left-icons" /></a>
                    <a href="https://github.com/ZedanSaheer" className="link"> <FaGithubSquare className="topbar_left-icons" /></a>
                    <a href="https://github.com/ZedanSaheer" className="link"> <FaInstagramSquare className="topbar_left-icons" /></a>
                </div>
                <div className="topbar_center">
                    <ul className="topbar_center-list">
                        <Link to="/" className="link" onClick={() => setToggle(value => !value)}>
                            <li className="topbar_center-listItem">
                                HOME
                            </li>
                        </Link>
                        <Link className="link" to="/about" onClick={() => setToggle(value => !value)}>
                            <li className="topbar_center-listItem">
                                ABOUT
                            </li>
                        </Link>
                        <Link className="link" to="/write" onClick={() => setToggle(value => !value)}>
                            <li className="topbar_center-listItem">
                                {user && "WRITE"}
                            </li>
                        </Link>
                        <Link className="link" to="/" onClick={() => setToggle(value => !value)}>
                            <li className="topbar_center-listItem" onClick={handleLogout}>
                                {user && "LOGOUT"}
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="topbar_right">
                    {user ?
                        (<Link className="link" to="/settings" onClick={() => setToggle(value => !value)}>
                            <div className="topbar-right-wrapper">
                                {image ? (<img src={PF + user.profilePic} alt="profile" className="topbar_right-img" />) : (<Avatar name={user.username} size="30" className="avatar" round />)}
                                <span className="topbar-settings">
                                    Profile
                                </span>
                            </div>
                        </Link>)
                        :
                        (
                            <ul className="topbar_center-list">
                                <li className="topbar_center-listItem">  <Link className="link topbar-auth" to="/login" onClick={() => setToggle(value => !value)}>LOGIN</Link></li>
                                <li className="topbar_center-listItem">
                                    <Link className="link topbar-auth" to="/register" onClick={() => setToggle(value => !value)}>REGISTER</Link>
                                </li> </ul>
                        )}
                </div>
            </div>
        </>
    )
}

export default Topbar
