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
    {
      path:'/aboutus',
      name:'AboutUs',
      component:()=>import('../pages/Aboutus.vue'),
      meta:{
        title:"Ukukhanya Equip Solutions | AboutUs"
      } as { title: string },
     
  },
  {
    path:'/gallery',
    name:'Gallery',
    component:()=>import('../pages/Gallery.vue'),
    meta:{
      title:"Ukukhanya Equip Solutions | GAllery"
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