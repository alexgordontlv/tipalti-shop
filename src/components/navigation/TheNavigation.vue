<template>
  <div id="nav">
    <router-link to="/"><p class="nav_item">Products</p></router-link> |
    <router-link to="/cart" class="nav_item">Cart</router-link>
    <p v-show="totalPrice > 0" class="cart_total nav_item">
      total: {{ totalPrice }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { totalPrice } from "@/store/modules/mutation.types.js";
export default {
  computed: mapGetters("cart", {
    totalPrice,
  }),
};
</script>

<style scoped>
.nav_item {
  margin: 0 10px;
}

.cart_total {
  border: 1px solid black;
  font-weight: bold;
  color: white;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background-color: #464646;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #3f96cd;
}
</style>
