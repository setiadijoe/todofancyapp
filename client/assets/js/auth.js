function getUserInfo() {
    return axios({
        method: 'post',
        url: 'http://localhost:3000/auth/decode',
        data: {
            accessToken: localStorage.getItem('accessToken')
        }
    });
}

function loggedInState() {

    $('#login-content').addClass('hidden');
    $('#logout-button').removeClass('hidden');
    $('#todo').removeClass('hidden');
    getUserInfo()
    .then((loggedInUser) => {
        $('#logged-in-user-name').html(loggedInUser.data.name);
        getTodos(loggedInUser.data.facebookID);
    })
    .catch((err) => {
        console.log(err);
    });
}

function loggedOutState() {
    $('#login-content').removeClass('hidden');
    $('#logout-button').addClass('hidden');
    $('#todo').addClass('hidden');
    $('#logged-in-user-name').html('');
}

function accessTokenCheck() {
    if (localStorage.getItem('accessToken')){
        loggedInState();
    } else {
        loggedOutState();
    }
}