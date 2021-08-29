import { mount } from "@vue/test-utils";
import { createStore } from "vuex";

export const createMockStore = (cartProps = {}, productProps = {}) => {
  return createStore({
    modules: {
      products: {
        namespaced: true,
        ...productProps,
      },
      cart: {
        namespaced: true,
        ...cartProps,
      },
    },
  });
};

export const mountMockStore = (store, component, childComponents) => {
  return mount(component, {
    components: { ...childComponents },
    global: {
      plugins: [store],
    },
  });
};
