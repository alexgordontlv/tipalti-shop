<template>
  <div class="container page-wrapper">
    <div class="page-inner">
      <div class="row">
        <div class="el-wrapper">
          <div class="box-up">
            <img class="img" :src="item.image" alt="" />
            <div class="img-info">
              <div class="info-inner">
                <span class="p-name">{{ item.title }}</span>
                <span class="p-name"> Quantity: {{ item.quantity }}</span>
              </div>
            </div>
          </div>
          <div class="box-down">
            <div class="h-bg" v-if="item.quantity > 0">
              <div class="h-bg-inner"></div>
            </div>

            <div
              class="cart"
              @click="addCartItem(item)"
              v-if="item.quantity > 0"
            >
              <span class="price">${{ item.price }}</span>
              <span class="add-to-cart">
                <span class="txt">Add in cart</span>
              </span>
            </div>
            <button v-else disabled>Out of quantity</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import "./productitem.styles.css";
import { addCartItem } from "@/store/modules/mutation.types";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: mapActions("cart", [addCartItem]),
};
</script>

<style scoped></style>
