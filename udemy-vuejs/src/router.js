//routes.js
import Vue from "vue";
import Router from 'vue-router';
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";
Vue.use(Router);
//useプラグインを適用する
//プラグインとはVue.js全体に影響に与えるようなもの
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/', 
      components: {
        default: Home,
        headar: HeaderHome
      }
    },
    { 
      path: "/users/:id",
      components: {
        default: Users,
        header: HeaderUsers 
      },
      props: {
        default: true,
        header: false
      },
      children: [
        {path: "posts", component: UsersPosts},
        {path: "profile", component: UsersProfile,name:"users-id-profile"}
      ]
    },
    {
      path: "/hello",
      redirect: "/"
    }
  ],
  scrollBehavior(to,savedPosition){
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash){
      return {
        selector: to.hash
      };  
    }
    return {x:0 ,y:0}
  }
});//コロンの後は何でもいい