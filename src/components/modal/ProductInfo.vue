<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
    data-bs-target="#productModal"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 id="productModalLabel" class="modal-title text-black font-weight-bold">
            <span v-if="tempProduct.id == undefined">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-12 col-lg-4">
              <div class="mb-1">
                <div class="form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <input
                    id="imageUrl"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <img class="img-fluid" :src="image" alt="" />
              </div>
              <div>
                <input
                  type="file"
                  ref="uploadImage"
                  class="form-control js-uploadImage"
                  name="file-to-upload"
                  id="file"
                  placeholder="請輸入圖片連結"
                  @change="uploadImage"
                  accept="image/*"
                  hidden
                />
                <button
                  class="btn btn-outline-secondary btn-sm d-block w-100"
                  @click="uploadImage"
                >
                  新增圖片
                </button>
              </div>
              <div>
                <button
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="$emit('removeImage')"
                >
                  刪除圖片
                </button>
              </div>
            </div>
            <div class="col-sm-12 col-lg-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                  />
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-gray-100 text-white"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-secondary text-white"
          data-bs-dismiss="modal"
          @click="$emit('changeProducts', tempProduct)">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['product'],
  data() {
    return {
      tempProduct: {},
      image: '',
    };
  },
  watch: {
    product() {
      this.tempProduct = JSON.parse(JSON.stringify(this.product));
      this.image = this.product.imageUrl;
    },
  },
  computed: {
  },
  mounted() {
    this.$refs.productModal.addEventListener('hidden.bs.modal', () => {
      this.tempProduct = {};
      this.image = '';
      this.due_date = 0;
    });
  },
  methods: {
    async uploadImage(e) {
      this.$refs.uploadImage.click();
      this.tempProduct.imageUrl = [];
      this.image = '';
      const vm = this;
      if (e.target.files === undefined) {
        return;
      }
      const file = e.target.files[0]; // 讀取圖片
      const fr = new FileReader();
      // eslint-disable-next-line no-shadow
      fr.onload = function (e) {
        vm.image = e.target.result;
      };
      fr.readAsDataURL(file);

      // 上傳圖片
      const formData = new FormData();
      formData.append('file-to-upload', file);

      // 圖片api上傳
      await this.axios.post('https://vue3-course-api.hexschool.io/api/traveltime1221/admin/upload', formData).then((res) => {
        if (!res.data.success) {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.data.message,
          });
        } else {
          this.tempProduct.imageUrl = res.data.imageUrl;
          this.$swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '上傳成功',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }).catch((err) => {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.data.message,
        });
      });
    },
  },
};
</script>
