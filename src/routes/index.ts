import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        name:'Home',
        component:()=>import('../pages/Welcome.vue'),
        meta:{
          title:"Ukukhanya Equip Solutions | Home"
        } as { title: string },
       
    },
]

const  router =  createRouter({
      routes,
      history: createWebHistory()
})

router.afterEach((to)=>{
     document.title = (to.meta as { title: string }).title
});

export default router;