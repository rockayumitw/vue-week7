<template>
  <div class="cart-list bg-white rounded p-4 position-absolute">
    <div v-if="cartAmount > 0">
      <ul class="item-cart-list">
        <li
          class="d-flex align-items-center mb-2 p-2 rounded"
          v-for="item in cartLists.carts"
          :key="item"
        >
          <div
            class="item-cart-pic rounded mr-4"
            :style="{ backgroundImage: 'url(' + item.product.imageUrl + ')' }"
          ></div>
          <div>
            <div class="text-4">{{ item.product.title }}</div>
            <div class="text-4 text-secondary">
              {{ $filters.currency(item.product.price) }}
            </div>
            <div>
              <!-- <button class="btn btn-primary">-</button> -->
              <input
                v-model.number="item.qty"
                min="1"
                type="number"
                class="form-control"
                @blur="
                  this.$store.dispatch('frontend/fetchAddToCart', {
                    product_id: item.product.id,
                    qty: item.qty,
                  })
                "
                :disabled="spinner === item.product.id"
              />
              <!-- <button class="btn btn-primary">+</button> -->
            </div>
          </div>
          <div>
            <span
              class="material-icons text-danger text-6"
              role="button"
              @click="$emit('delSingleProduct', item.id)"
            >
              delete_forever
            </span>
          </div>
        </li>
      </ul>
      <hr class="text-gray-100" />
      <div class="d-flex justify-content-between mb-3">
        <span class="text-secondary">總額</span>
        <span class="text-secondary">{{ $filters.currency(cartLists.final_total) }}</span>
      </div>
      <div>
        <router-link
          to="/cart"
          href="javascript:;"
          class="btn btn-primary w-100 text-white"
        >
          結帳去
        </router-link>
      </div>
    </div>
    <div class="text-center" v-else>
      <div class="p-5">
        <div class="text-gray-100 text-7 mb-5">
          ( O_O )"
        </div>
        <p class="text-gray-200">您的購物車是空的</p>
        <router-link to="/products" class="btn btn-primary text-white">
          前往瀏覽商品
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cartAmount', 'cartLists'],
};
</script>
