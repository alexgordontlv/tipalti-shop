import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/views/ProductList.vue";

const routes = [
  {
    path: "/",
    name: "Products",
    component: ProductList,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "@/views/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
