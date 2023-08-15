import Home from './components/Home.vue'
import Header from './components/Header.vue'

// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart'
// import UserDetail from './components/user/UserDetail'
// import UserEdit from './components/user/UserEdit'

//Lazy Load Prosesi
//Hansina ehtiyac  varsa o yuklenir hamsi birlikde deyil 
//Amma  birine ehtiyaz olanda hamsi yuklensin deyirsense 
const user= resolve=>{
    require.ensure("./components/user/User.vue", ()=>{
        resolve(require("./components/user/User.vue"));
    }
    //, Bura "user" yaz 
    )
}
const userStart= resolve=>{
    require.ensure("./components/user/UserStart.vue", ()=>{
        resolve(require("./components/user/UserStart.vue"));
    }
    //, Bura "user" yaz 
    )
}

const userDetail= resolve=>{
    require.ensure("./components/user/UserDetail.vue", ()=>{
        resolve(require("./components/user/UserDetail.vue"));
    }
    //, Bura "user" yaz 
    )
}

const userEdit= resolve=>{
    require.ensure("./components/user/UserEdit.vue", ()=>{
        resolve(require("./components/user/UserEdit.vue"));
    }
    //, Bura "user" yaz 
    )
}

export const routes=[
    // {path: '/', component: Home, name:"Main Page"},
    // If we are woking more than one component
    {path: '/', name:"Main Page", components:{
         default: Home,
        'header-top': Header 
    }},
//      {path:'/user', component: User, name: "User Page",
//     children:[
//         {path:'', component:UserStart},
//         {path:':id', component:UserDetail},
//         {path:':id/edit', component:UserEdit, name:"UserEditPage"}
// ]}

 // Make same thing to user
     {path:'/user',name: "User Page",
    components:{
        default: user,
        'header-bottom': Header 
    },
    children:[
        {path:'', component:userStart},
        //Route control for one page with beforeEnter
        {path:':id', component:userDetail, beforeEnter:(to, from, next)=>{
             console.log("Before Enter Route- Route Controling in routes level ");
             // next daxilinde false yazsan bu sehife ishlemez
             next();
        }},

        {path:':id/edit', component:userEdit, name:"UserEditPage"}
]},
                           
// { path:'/redirect', redirect: '/'}
{ path:'/redirect', redirect: {name :'Main Page'}},
//If url is not compatible with all pathes which are defined before
//Wild Card
{ path:'*', redirect: '/'}
]
