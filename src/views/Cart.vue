<template>
  <div class="cart_container">
    <div class="container">
      <h1>Cart</h1>
      <div class="total_sum" v-if="totalPrice > 0">
        Total: ${{ totalPrice }}
      </div>
      <div v-else>Cart Is Empty</div>

      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-2">Item Title</div>
          <div class="col col-3">Quantity</div>
          <div class="col col-4">Total Price</div>
        </li>
        <li
          class="table-row "
          v-for="(item, index) in cartItems"
          :key="item.id"
          :class="classIfIsOdd(index)"
        >
          <div class="col col-2" data-label="Customer Name">
            {{ item.title }}
          </div>
          <div class="col col-3" data-label="Amount">
            <button @click="removeCartItem(item)">-</button> {{ item.quantity }}
            <button @click="addCartItem(item)">
              +
            </button>
          </div>
          <div class="col col-4" data-label="Payment Status">
            ${{ item.price * item.quantity }}
          </div>
        </li>
      </ul>
      <button>
        CheckOut
      </button>
      <button @click="emptyCart()">
        ClearCart
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import {
  addCartItem,
  removeCartItem,
  emptyCart,
  totalPrice,
} from "@/store/modules/mutation.types.js";

export default {
  computed: {
    ...mapGetters("cart", [totalPrice]),
    ...mapState("cart", {
      cartItems: (state) => state.cartItems,
    }),
  },
  methods: {
    ...mapActions("cart", [addCartItem, removeCartItem, emptyCart]),
    classIfIsOdd: (index) => (index % 2 === 0 ? `table-row-even` : ``),
  },
};
</script>

<style scoped>
button {
  margin: 0 10px;
}

.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}

.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
}
.responsive-table .table-header {
  background-color: #95a5a6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.responsive-table .table-row-odd {
  background-color: #ffffff;
}
.table-row-even {
  background-color: #e9e9e9;
}
.responsive-table .col-1 {
  flex-basis: 10%;
}
.responsive-table .col-2 {
  flex-basis: 40%;
}
.responsive-table .col-3 {
  flex-basis: 25%;
}
.responsive-table .col-4 {
  flex-basis: 25%;
}
@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }
  .responsive-table li {
    display: block;
  }
  .responsive-table .col {
    flex-basis: 100%;
  }
  .responsive-table .col {
    display: flex;
    padding: 10px 0;
  }
  .responsive-table .col:before {
    color: #6c7a89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }
}
</style>
