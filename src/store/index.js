import { createStore } from "vuex";
import products from "./modules/products.module";
import cart from "./modules/cart.module";

const store = createStore({
  modules: {
    products,
    cart,
  },
});

export default store;
