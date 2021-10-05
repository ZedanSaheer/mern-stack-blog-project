import "../singlePost/Singlepost.css"
import programmer from "../sidebar/media/the-dream.jpg"
import loveCode from "../sidebar/media/love.jpg"

const SinglePost = () => {
    return (
        <div className="singlepost">
            <div className="singlepost_wrapper">
                <img src={loveCode} alt="qoute" className="singlepost_img" />
                <h1>About Me</h1>
                <div className="singlepost_info">
                    <span className="singlepost_author">Author : <b>Zedan Saheer</b></span>
                    <span className="singlepost_date">05/10/2020</span>
                </div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, fugit quod modi in consequatur magni distinctio a soluta nesciunt atque iure eligendi optio commodi obcaecati labore aliquam perspiciatis facere aperiam?
                <img src={programmer} alt="coding" className="singlepost_img"/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima repudiandae, autem maxime ea iste expedita dolore neque eveniet nam, deleniti itaque? Similique, dolores illum eveniet a ut saepe fuga!
                </p>
            </div>
        </div>

    )
}

export default SinglePost
