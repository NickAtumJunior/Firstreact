import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

function Profile() {

    let navigate = useNavigate();
    let { username } = useParams()
    return (
        <div>
            <h1>this is the profile page for {username}</h1> <button onClick={() =>{
                navigate("/about")
            }}>Chnage to about page</button>
        </div>
    );
}

export default Profile;