import React from "react";
import { GoogleLogout } from "react-google-login";

const {REACT_APP_GOOGLE_CLIENT_ID} = process.env;

function Logout (){
    const onSuccess = () => {
        alert("Logged out succesfully");
    };

    return (
        <div>
            <GoogleLogout
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            >  
            </GoogleLogout>
        </div>
    );
}

export default Logout;