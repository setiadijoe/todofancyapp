function setFBAccessToken(response) {
    if (response.status === 'connected') {
        console.log(response);
        localStorage.setItem('facebookId', response.authResponse.userID);
        location.reload();
    }
}

function logout() {
    localStorage.removeItem('facebookId');
    location.reload();
}

function facebookLogin() {
    FB.login(function (response) {
        console.log(response);
        FB.getLoginStatus(function (response) {
            setFBAccessToken(response);
        });
    }, { scope: 'public_profile,email' });
}
