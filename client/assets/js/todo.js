new Vue({
    el: '#app'
})

Vue.component('app-title', {
    template: `<h1>{{ title }}</h1>`,
    data:{
        title: 'To Do App'
    }
})