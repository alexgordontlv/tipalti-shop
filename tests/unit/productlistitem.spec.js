// import store from "@/store";
import ProductListItem from "@/components/productlistitem/ProductListItem";
import { mount } from "@vue/test-utils";

const store = {
  modules: {
    cart: {
      namespaced: true,
      actions: {
        addCartItem: jest.fn(),
      },
    },
  },
};

const props = {
  item: {
    title: "moch item",
    id: 2,
    price: 2,
    quantity: 0,
    image: "",
  },
};

const mocks = {
  $store: store,
};

describe("ProductListItem.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ProductListItem, {
      props,
      global: {
        mocks,
      },
    });
  });
  test("renders the ProductListItem", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("has the item props", () => {
    expect(wrapper.props().item).not.toBeNull();
  });
  test("renders No Quantity button when there is no quantity and not renders item", async () => {
    const button = await wrapper.find("button");
    expect(button.isVisible()).toBe(true);
    const divCart = await wrapper.find(".cart");
    expect(divCart.exists()).toBe(false);
  });

  //   test("run vuex addItemToCart on click", async () => {
  //     await wrapper.find(".cart").trigger("click");
  //     console.log(store);
  //     expect(store.dispatch).toHaveBeenCalledWith("cart/addCartItem");
  //   });
});
