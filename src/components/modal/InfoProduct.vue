<template>
  <div
    class="modal fade"
    id="productModal"
    ref="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
      <div class="modal-content border-0">
        <div class="modal-header text-white">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('initProduct')"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-fluid" :src="product.imageUrl" alt="" />
            </div>
            <div class="col-sm-6">
              <h4>{{ product.title }} <i class="bi-alarm"></i></h4>
              <p class="badge bg-primary rounded-pill">{{ product.category }}</p>
              <p>商品描述：{{ product.description }}</p>
              <p>商品內容 : {{ product.content }}</p>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
              <div>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    v-model.number="qty"
                  />
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="$emit('addToCart', product.id, qty)"
                  >
                    <!-- <i
                      class="fas fa-spinner fa-pulse"
                      v-if="addCartSpinner === product.id"
                    ></i>
                    <i class="fas fa-cart-plus" v-else></i> -->
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'addCartSpinner'],
  data() {
    return {
      qty: 1,
    };
  },
  watch: {
    product(newValue, oldValue) {
      if (oldValue) {
        this.qty = 1;
      }
    },
  },
};
</script>
