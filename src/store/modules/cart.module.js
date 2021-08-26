import {
  SET_ITEM_TO_CART,
  DECREMENT_PRODUCT_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  INCREMENT_PRODUCT_QUANTITY,
  removeCartItem,
} from "./mutation.types";

export default {
  namespaced: true,
  state() {
    return {
      cartItems: [],
    };
  },
  getters: {
    totalPrice(state) {
      return state.cartItems
        .reduce((acc, item) => acc + item.quantity * item.price, 0)
        .toFixed(2);
    },
  },
  actions: {
    addCartItem({ commit, rootState }, product) {
      const foundItem = rootState.products.products.find(
        (item) => item.id === product.id
      );
      if (foundItem.quantity > 0) {
        commit(SET_ITEM_TO_CART, foundItem);
        commit(`products/${DECREMENT_PRODUCT_QUANTITY}`, foundItem, {
          root: true,
        });
      }
    },
    removeCartItem({ commit }, product) {
      commit(REMOVE_ITEM_FROM_CART, product);
      commit(`products/${INCREMENT_PRODUCT_QUANTITY}`, product, { root: true });
    },
    emptyCart({ state, dispatch }) {
      state.cartItems.forEach((item) => {
        const quantity = item.quantity;
        for (let index = 0; index < quantity; index++) {
          dispatch(removeCartItem, item);
        }
      });
    },
  },
  mutations: {
    [SET_ITEM_TO_CART](state, product) {
      const foundItem = state.cartItems.find((item) => item.id === product.id);
      if (foundItem) {
        foundItem.quantity++;
      } else {
        return state.cartItems.push({ ...product, quantity: 1 });
      }
    },

    [REMOVE_ITEM_FROM_CART](state, product) {
      const foundItem = state.cartItems.find((item) => item.id === product.id);
      if (foundItem.quantity > 1) {
        foundItem.quantity--;
      } else {
        const newItems = state.cartItems.filter(
          (item) => item.id !== product.id
        );
        state.cartItems = newItems;
      }
    },
  },
};
