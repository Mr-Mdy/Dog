import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home');
const Shop = () => import('../views/shop/Shop');
const Profile = () => import('../views/profile/Profile');
const Square = () => import('../views/square/Square');
const SignIn = () => import('../views/signin/SignIn')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/square',
        component: Square,
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/signin',
        component: SignIn,
    },
]

const router = new VueRouter({
    routes,
    mode: 'history', //将默认的哈系模式改为hisory
    linkActiveClass: 'active', //设置活跃状态下的名称
})

router.beforeEach((to,from,next)=>{
    if (to.meta.requireAuth) {
        if (store.state.user.username) {
            console.log(11);
            next()
        } else {
            next({
                // 此处通过修改push给query增加shopid的方式, 会重置跳转数据.
                // 这会影响到replace跳转, 导致变成正常push跳转.
                // 如果原跳转是replace方式, 需要在query里主动添加shopid. 避免被重置数据.
                path: 'signin',
                query: {redirect: to.fullPath}
            })
        }
    } else {
        next()
    }
})


export default router


