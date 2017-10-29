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

// Vue.component('list-of-todo', {
//     template:`
//     <table>
//         <thead>
//             <th>List</th>
//             <th>Done</th>
//             <th>Action</th>
//         </thead>
//         <tbody>
//                 <todo v-for="todo in todos" :key="todo._id" :todoId="todo._id" :todoName="todo.todo_list" :todoFinished="todo.done">
//                 </todo>
//         </tbody>
//     </table>
//     `,
//     data : function(){
//         return : {
//             facebookId: ''
//             todos : []
//         }
//     }
//     created: function(){
//         const accessToken = localStorage.getItem('accessToken');
//         if (accessToken){
//             axios.post('http://localhost:3000/fbauth/login', {
//                 accessToken: accessToken
//             })
//             .then(response=>{
//                 this.todos = response.data
//             })
//             .catch(err=>{
//                 console.log(err);
//             })
//         } 
//     }
// })
new Vue({
    el: '#app'
});