import { createMockStore, mountMockStore } from "./mocktestutils";
// import store from "@/store";
import ProductList from "@/views/ProductList";
import ProductListItem from "@/components/productlistitem/ProductListItem";
import Spinner from "@/components/spinner/spinner";

describe("ProductList.vue", () => {
  test("renders the product list", () => {
    const state = {
      products: [],
    };
    const actions = {
      fetchProducts: () => {},
    };
    const store = createMockStore({}, { state, actions });
    const wrapper = mountMockStore(store, ProductList);
    expect(wrapper.exists()).toBe(true);
  });

  test("renders ProductListItem", async () => {
    const state = {
      products: [{ title: "moch item", id: 2, price: 2 }],
    };
    const actions = {
      fetchProducts: () => {},
    };
    const store = createMockStore({}, { state, actions });
    const wrapper = mountMockStore(store, ProductList, {
      ProductListItem,
      Spinner,
    });
    const productListComponent = await wrapper.findComponent(ProductListItem);
    expect(productListComponent.exists()).toBe(true);

    const spinnerComponent = await wrapper.findComponent(Spinner);
    expect(spinnerComponent.exists()).toBe(false);
  });
});
