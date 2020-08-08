import React from 'react';
import { GoogleLogin } from 'react-google-login';
import config from '../config';

const LoginPage = () => {
    const responseGoogle = response => {
        console.log(response);
    }
    return (
        <div className="login_button">
            <GoogleLogin
                clientId={config.CLIENT_ID}
                isSignedIn={true}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                scope="https://www.googleapis.com/auth/youtube"
                cookiePolicy={"single_host_origin"}
            />
        </div>
    )
}
export default LoginPage;