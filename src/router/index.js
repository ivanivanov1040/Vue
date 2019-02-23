import Vue from 'vue';
import Router from 'vue-router';
import News from '../components/news';
import SearchPlayer from '../components/searchplayer'
import IngameStore from '../components/ingamestore'
Vue.use(Router);

const routes = [
    {
        path:'/',
        name:'news',
        components:{
            default: News
        },
    },
    {
        path:'/searchplayer',
        name:'searchplayer',
        components:{
            default: SearchPlayer
        }
    },
    {
        path:'/store',
        name:'ingamestore',
        components:{
            default: IngameStore
        }
    }
];

export default new Router({routes});