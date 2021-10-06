import Post from "../post/Post"
import "./Posts.css"

const Posts = ({posts}) => {

    return (
        <div className="posts">
          {posts.map((post)=>(<Post post={post}/>))}
        </div>
    )
}


export default Posts
