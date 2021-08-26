import fetchProductsApi from "@/api/fetchproducts";

import {
  INCREMENT_PRODUCT_QUANTITY,
  DECREMENT_PRODUCT_QUANTITY,
  SET_PRODUCTS,
  SET_ERROR,
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
      const [data, error] = await fetchProductsApi();

      if (!error) {
        const newProducts = data.map((prod) => ({
          ...prod,
          quantity: Math.floor(Math.random() * 6) + 1,
        }));
        commit(SET_PRODUCTS, newProducts);
      } else {
        commit(SET_ERROR, error);
      }
    },
  },
  mutations: {
    [SET_PRODUCTS](state, products) {
      state.products = products;
    },
    [SET_ERROR](state, error) {
      state.error = error;
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
