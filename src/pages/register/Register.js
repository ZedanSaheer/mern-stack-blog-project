import { useState } from "react"
import { Link } from "react-router-dom"
import "./Register.css"
import instance from "../../axios"


const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const response = await instance.post("/auth/register", {
                username, email, password
            })
            response.data && window.location.replace("/login")
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className="login">
            <h2>Register</h2>
            <form className="login_form">
            {error && <span className="warning">Username or email is already in use</span>}
                <label htmlFor="text">Username</label>
                <input type="text" name="text" placeholder="enter your username.."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="enter your email.."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">password</label>
                <input type="password" name="password" placeholder="enter your password.." onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={handleSubmit} className="login_submit">Register</button>
                <span className="register_text">Already a user? Login now.</span>
                <button className="login_submit"><Link to="/login" className="link">
                    Login
                </Link>
                </button>
            </form>
        </div>
    )
}

export default Register
