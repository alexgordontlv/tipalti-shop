<template>
  <div class="products">
    <h1>Products</h1>
    <Spinner v-if="loading" />

    <div class="main_section" v-else>
      <ProductListItem
        v-for="product in products"
        :item="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script>
import ProductListItem from "@/components/productlistitem/ProductListItem";
import Spinner from "@/components/spinner/Spinner";
import { mapState } from "vuex";
import { fetchProducts } from "@/store/modules/mutation.types.js";

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: mapState("products", {
    products: (state) => state.products,
  }),
  created() {
    if (this.products.length === 0) {
      this.loading = true;
      this.$store
        .dispatch(`products/${fetchProducts}`)
        .finally(() => (this.loading = false));
    }
  },
  components: {
    ProductListItem,
    Spinner,
  },
};
</script>

<style scoped>
.main_section {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
