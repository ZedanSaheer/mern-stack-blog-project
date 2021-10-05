import "./Login.css"
import { Link } from "react-router-dom"
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import ReactLoading from "react-loading"
import instance from "../../axios";

const Login = () => {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({
            type: "LOGIN_START"
        });
        try {
            const response = await instance.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: "LOGIN_FAILURE",
            });
            setError(true)
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form className="login_form" onSubmit={handleSubmit}>
                {error && <span className="warning">incorrect username or password , please verify Credentials</span>}
                <label htmlFor="email">username</label>
                <input type="text" name="email" placeholder="enter your username.." ref={userRef} />
                <label htmlFor="password">password</label>
                <input type="password" name="password" placeholder="enter your password.." ref={passwordRef} />
                {isFetching ? (<ReactLoading type="spin" color="white" height="10%" width="10%" />) : (<button className="login_submit" type="submit">Login</button>)}
                <span className="register_text">New user? Register now.</span>
                <button className="login_submit">
                    <Link to="/register" className="link">
                        Register
                    </Link>
                </button>
            </form>
        </div>
    )
}

export default Login
