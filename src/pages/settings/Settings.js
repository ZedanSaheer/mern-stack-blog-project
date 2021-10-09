import React, { useContext, useState , useEffect} from 'react'
import Avatar from 'react-avatar'
import { BiUserCircle } from 'react-icons/bi'
import instance from '../../axios'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import ReactLoading from "react-loading"
import axios from 'axios'
import "./Settings.css"

const Settings = () => {

    const [file, setFile] = useState(null);
    const { user, dispatch, isFetching } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [warning, setWarning] = useState(false);
    const [image, setImage] = useState(false);
    const [dialog, showDialog] = useState(false);
    const [warningUpload, setWarningUpload] = useState(false);
    const PF = "https://mern-blog-zedan.herokuapp.com/images/"

    const handleSubmit = async (e) => {
        dispatch({ type: "UPDATE_START" })
        e.preventDefault();
        if (file) {
            const updatedUser = {
                userId: user._id,
            }
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await instance.post("/upload", data);
                const response = await instance.put("/users/" + user._id, updatedUser);
                setSuccess(true);
                setWarningUpload(false);
                dispatch({ type: "UPDATE_SUCCESS", payload: response.data })
                window.location.reload("/");
            } catch (error) {
                setWarningUpload(true);
                setSuccess(false);
                dispatch({ type: "UPDATE_FAILURE" });
            }

        }
        if (!username === "" || !email === "" || !password === "") {
            const updatedUser = {
                userId: user._id,
                username
                , email
                , password
            }
            try {
                const response = await instance.put("/users/" + user._id, updatedUser);
                setSuccess(true);
                setWarning(false);
                dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
                window.location.reload("/");
            } catch (error) {
                setWarning(true);
                dispatch({ type: "UPDATE_FAILURE" });
                setSuccess(false);
            }
        }
        dispatch({ type: "UPDATE_FAILURE" });
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

    const handleDelete = async () => {
        try {
            await instance.delete(`/users/${user._id}`, {
                data: {
                    userId: user?._id,
                }
            });
            dispatch({
                type: "LOGOUT",
            })
            window.location.reload("/");
        } catch (error) {
            setWarning(true);
            showDialog(false)
        }
    }

    return (
        <div className="settings">
            <div className="settings_wrapper">
                <div className="settings_title">
                    <span className="settings_updateTitle">Update your account</span>
                    <div>
                        <span className="settings_deleteTitle" onClick={() => showDialog(true)}>Delete your account</span>
                        {dialog &&
                            <div className="settings_dialog">
                                <div>
                                    <div>Are you sure? this action cannot be changed.</div>
                                    <div className="dialog_options">
                                        <span onClick={handleDelete} className="settings_deleteTitle_yes">yes</span>
                                        <span className="settings_deleteTitle_no" onClick={() => showDialog(false)}>no</span>
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div>
                <form className="settings_form" onSubmit={handleSubmit}>
                    {file && <span className="success">Press update to display changes.</span>}
                    {warningUpload && <span className="settings_warning">Uploading failed , please try again later.</span>}
                    {warning && <span className="settings_warning">Some error occured, please try again</span>}
                    {success && <span className="success">Successfully updated profile details.</span>}
                    <label>Profile Picture</label>
                    <div className="settings_pp">
                        {!image ? <Avatar name={user.username} round size={50} /> : <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="settings profile icon" />}
                        <label htmlFor="file">
                            Change display picture <BiUserCircle className="settings_icon" />
                        </label>
                        <input type="file" id="file" style={{ display: 'none' }}
                            onChange={(e) => setFile(e.target.files[0])}
                            accept=".png,.jpeg,.jpg,.svg"
                        />
                    </div>
                    <label>username</label>
                    <input autoComplete="off" type="text" placeholder={user.username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>email</label>
                    <input autoComplete="off" type="email" placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>password</label>
                    <input autoComplete="off" type="password" placeholder="*******"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isFetching ?
                        (<div className="loading"><ReactLoading type="spin" color="black" height="5%" width="5%" /></div>)
                         :
                        (<button className="settings_submit"
                            type="submit">Update</button>)}

                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
