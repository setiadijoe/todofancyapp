Vue.component('app-title', {
    template: `<h1>{{ title }}</h1>`,
    data: function(){
        return {title: 'To Do App'}
    }
})

Vue.component('authentication-buttons', {
    template: `
    <button v-if="!facebookId" onclick="facebookLogin()" class="btn btn-primary">Login with Facebook</button>
    <button v-else id="logout-button" onclick="logout()" class="btn btn-danger">Logout</button>
    `,

    data: function () {
        return { facebookId: '' };
    },

    created() {
        if (localStorage.getItem('facebookId'))
        this.facebookId = localStorage.getItem('facebookId');
    }
});
new Vue({
    el: '#app'
});