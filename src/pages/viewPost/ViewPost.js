import SinglePost from "../../components/singlePost/SinglePost"
import AboutPost from "../../components/aboutPost/AboutPost"
import "./Viewpost.css"

const ViewPost = ({about}) => {
    return (
        <div className="viewpost">
            {about ? <AboutPost/>:<SinglePost/>}
        </div>
    )
}

export default ViewPost
