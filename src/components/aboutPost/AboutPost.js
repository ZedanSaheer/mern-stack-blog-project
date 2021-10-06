import "../singlePost/Singlepost.css"
import programmer from "./media/the dream.jpg"
import loveCode from "./media/love.jpg"

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
                    Like every journal of changes humans go through at the age of 18-24 , I too have a story to tell , a journal to share ; of a boy who had no idea how the lord had destined a fate to him. Let me first give you an overview of myself before we start dividing the experiences of an immature passionate 20 year old teenager who yet has to explore and discover his life but already have experienced some things more than an average boy of his age. Like every other Non-Resident Indian boy who grew up within an above average middle-class family somewhere in the region of Middle-East , i too had all of the unfair advantages of being fortunate enough to be served of whatever i was asked ; be it wants or needs , my father had always been very generous to all of us and since i had been growing through teenage in a very comfortable zone of pampering obviously i had no idea what it meant to work for something really hard or desire for anything beyond what my parents could afford because i always had them fullfill such desires. It is now very precise to say i was having what any other 20 year old would be having at this age , "FUN". But after a period of high-school , it is mandatory you would have to leave this zone of ultimate comfort and explore beyond the unlimited desires of wants and needs. And that's the point of life when you decide whether you would want fun to takeover your life in this phase of what the wise people call as the "Exploration Period" , it is the period where you explore through people and different lives and experience a different sort of impact on your thoughts and vision as compared to what your thoughts were when you were in your school days or you can just like me consider all of this too complicated and let fun takeover throughout this phase. Yes , i was no different and i'm happy to admit this , now you might be wondering what is the point of this book then? well i did admit that i had allowed fun to takeover my life but i never concluded to what happend beyond that point and this is what the whole context of this book is going to be based on. The sheer conciousness and thoughts during the exploration period that can change your whole paradigm about life.
                    <img src={programmer} alt="coding" className="singlepost_img" />
                    Before we step into a world of mixed reality , fiction and deep emotion , let me tell you : some stories you travel through in here are , exaggerated and fictionalized to some extent at some cases , all on the basis of my experiences and thoughts.

                    I do not mean to offend any specific person in this journey .

                    this is a practical implementation of my deep memory to words , it will help you understand about myself and how i changed my thoughts at different periods of my life and how they have helped me.

                </p>
                <blockquote>   
                <i>"We write to taste life twice, in the moment and in retrospect."</i>
                    <br /> -Anaïs Nin
                </blockquote>
            </div>
        </div>

    )
}

export default SinglePost
