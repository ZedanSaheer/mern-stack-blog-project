import "./Post.css"
import { Link } from "react-router-dom"

const Post = ({ post }) => {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    const PF = "https://mern-blog-zedan.herokuapp.com/images/";

    return (
        <div className="post">
            {post?.photo ? (<Link to={`/post/${post._id}`} className="link_post"><img src={PF + post.photo} alt="post cover" className="post_img"/></Link>) : <Link to={`/post/${post._id}`} className="link_post"><div className="skeleton_img" style={{ backgroundColor: `rgb(${red},${green},${blue})` }}><span>{post.title}</span></div></Link>}
            <div className="post_info">
                <div className="post_categories">
                    {post.categories?.map((category,index) => (
                        <span className="post_category"
                        key={index}>{category}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="post_title">
                        {post.title}
                    </span>
                </Link>
                <span className="post_date">
                    {new Date(post.createdAt).toLocaleDateString()}
                    <span className="post_time">
                        {new Date(post.createdAt).toLocaleTimeString()}
                    </span>
                </span>
            </div>
            <div className="post_desc">
                {post.desc}
            </div>
        </div>
    )
}

export default Post
