export const refreshTokenSetup = (res) => {
    // timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 -5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 -5 * 60) * 1000;
        // saveUserToken(newAuthRes.acces_token); <-- saving new token
        console.log("new Auth Token ", newAuthRes.id_token);

        // setup another timer after the first one
        setTimeout(refreshToken, refreshTiming);
    };

    // setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
};