function setFBAccessToken(response) {
    if (response.status === 'connected') {
        console.log(response);
        localStorage.setItem('facebookId', response.authResponse.userID);
        localStorage.setItem('accessToken', response.authResponse.accessToken)
        // location.reload();
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3000/fbauth/login',
        //     data: {
        //         response: response
        //     }
        // })
        // .then(function (serverResponse) {
        //     console.log(serverResponse);
        //     localStorage.setItem('accessToken', serverResponse.data.accessToken);
        //     loggedInState();
        // })
        // .catch(function (err) {
        //     console.log(err);
        // });
    }
}

function logout() {
    console.log('lalallalala');
    localStorage.removeItem('facebookId')
    localStorage.removeItem('accessToken');
    location.reload();
}

function facebookLogin() {
    FB.login(function (response) {
        console.log('lulululululu');
        FB.getLoginStatus(function (response) {
            setFBAccessToken(response);
        });
    }, { scope: 'public_profile,email' });
}
