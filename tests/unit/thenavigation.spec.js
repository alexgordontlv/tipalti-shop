import { createMockStore, mountMockStore } from "./mocktestutils";
import TheNavigation from "@/components/navigation/TheNavigation";

describe("TheNavigation.vue", () => {
  test("renders the navigation", () => {
    const store = createMockStore();
    const wrapper = mountMockStore(store, TheNavigation);
    expect(wrapper.exists()).toBe(true);
  });

  test("renders the count", () => {
    let getters = {
      totalPrice: () => 2,
    };
    const store = createMockStore({ getters });
    const wrapper = mountMockStore(store, TheNavigation);
    const pTag = wrapper.findAll("p");
    console.log(pTag[1].text());
    expect(pTag[1].text()).toContain("total: 2");
  });

  test("not renders the count <p>", () => {
    const store = createMockStore();
    const wrapper = mountMockStore(store, TheNavigation);
    const pTag = wrapper.findAll("p");
    expect(pTag[1].isVisible()).toBe(false);
  });
});
