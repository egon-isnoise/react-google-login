import React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";

const {REACT_APP_GOOGLE_CLIENT_ID} = process.env;

function Login (){
    const onSuccess = (res) => {
        console.log("[Login Success] Current user: ", res.profileObj);

        // initialising the setup
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log("[Login failed] res: ", res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                style={{ marginTop: "100px"}}
                isSignedInd={true}
            />      
        </div>
    );
}

export default Login;