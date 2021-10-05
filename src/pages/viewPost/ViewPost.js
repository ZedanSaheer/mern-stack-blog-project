import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import AboutPost from "../../components/aboutPost/AboutPost"
import "./Viewpost.css"

const ViewPost = ({about}) => {
    return (
        <div className="viewpost">
            {about ? <AboutPost/>:<SinglePost/>}
            <Sidebar/>
        </div>
    )
}

export default ViewPost
