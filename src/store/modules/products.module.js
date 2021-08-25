import axios from "axios";
import {
  INCREMENT_PRODUCT_QUANTITY,
  DECREMENT_PRODUCT_QUANTITY,
  SET_PRODUCTS,
  fetchProducts,
} from "./mutation.types";

export default {
  namespaced: true,
  state() {
    return {
      error: null,
      products: [],
    };
  },
  actions: {
    async [fetchProducts]({ commit }) {
      const res = await axios.get("https://fakestoreapi.com/products");
      const newProducts = res.data.map((prod) => ({
        ...prod,
        quantity: Math.floor(Math.random() * 6) + 1,
      }));
      commit(SET_PRODUCTS, newProducts);
    },
  },
  mutations: {
    [SET_PRODUCTS](state, products) {
      state.products = products;
    },
    [DECREMENT_PRODUCT_QUANTITY](state, product) {
      const findItem = state.products.find((item) => item.id === product.id);
      if (findItem?.quantity > 0) {
        findItem.quantity--;
      }
    },
    [INCREMENT_PRODUCT_QUANTITY](state, product) {
      const findItem = state.products.find((item) => item.id === product.id);
      if (findItem?.quantity >= 0) {
        findItem.quantity++;
      }
    },
  },
};
