Vue.component('app-title', {
    template: `<h1>{{ title }}</h1>`,
    data: function(){
        return {title: 'To Do App'}
    }
})

Vue.component('authentication-buttons', {
    template: `
    <button v-if="!facebookId" id="loggin-button" onclick="facebookLogin()" class="btn btn-primary">Login with Facebook</button>
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

Vue.component('list-of-todo', {
    template:`
    <table border="1">
        <thead>
            <th>List</th>
            <th>Done</th>
            <th>Action</th>
        </thead>
        <tbody v-for="data in todos">
            <td>{{ data.todo_list }}</td>
            <td>{{ data.done }}</td>
            <td><button v-on:click="finishing(data)" class="btn">Finished?</button></td>
        </tbody>
    </table>
    `,
    data : function(){
        return  {
            facebookId: '',
            todos : []
        }
    },
    created: function(){
        const accessToken = localStorage.getItem('accessToken');
        const facebookId = localStorage.getItem('facebookId')
        if (accessToken){
            axios.get(`http://localhost:3000/api/user_id?user_id=${facebookId}`)
            .then(response=>{
                console.log(response.data);
                this.todos = response.data
            })
            .catch(err=>{
                console.log(err);
            })
        } 
    },
    methods:{
        finishing: function(done){
            // return done 
            // console.log('====================================');
            done.done = !done.done
            axios.put(`http://localhost:3000/api/id?id=${done._id}`,{
                user_id:done.user_id,
                todo_list:done.todo_list,
                done: done.done
            })
            .then(afterdoing=>{
                console.log('====================================');
                console.log(afterdoing.data);
                console.log('====================================');
            })
            // console.log('====================================');
            // return done
        }
    }
})
new Vue({
    el: '#app'
});