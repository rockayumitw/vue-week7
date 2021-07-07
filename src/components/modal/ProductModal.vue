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
        <div class="modal-header border-bottom-0">
          <h4 id="productModalLabel" class="modal-title text-black font-weight-bold">
            <span v-if="tempProduct.id == undefined">新增產品</span>
            <span v-else>編輯產品</span>
          </h4>
        </div>
        <div class="modal-body">
          <form class="row needs-validation" novalidate>
            <div class="col-sm-12 col-lg-4">
              <div class="mb-1">
                <div class="form-group">
                  <label for="imageUrl">
                    輸入圖片網址
                  </label>
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
                  type="button"
                  :disabled="spinner"
                  @click="uploadImage"
                >
                <i class="fas fa-spinner fa-pulse" v-if="spinner"></i>
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
                <label for="title">
                  <small class="text-danger">*</small>
                  標題
                </label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                  required
                />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">
                    <small class="text-danger">*</small>
                    分類
                  </label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">
                    <small class="text-danger">*</small>
                    單位
                  </label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">
                    <small class="text-danger">*</small>
                    原價
                  </label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">
                    <small class="text-danger">*</small>
                    售價
                  </label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                    required
                  />
                </div>
              </div>
              <hr />
              <div class="form-group">
                <label for="description">產品描述</label>
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempProduct.description"
                  required
                ></ckeditor>
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
          </form>
          <div class="d-flex justify-content-end">
              <button
              type="button"
              class="btn btn-gray-100 text-white mr-1"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="submit" class="btn btn-secondary text-white"
            @click="updateProduct">
              確認
            </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import { mapGetters } from 'vuex';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  props: ['product'],
  data() {
    return {
      tempProduct: {},
      image: '',
      prodcutModal: '',
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', 'typing', 'bold', 'italic', '|', 'link', 'bulletedList', 'Underline', 'Strike'],
      },
    };
  },
  watch: {
    product() {
      this.tempProduct = JSON.parse(JSON.stringify(this.product));
      this.image = this.product.imageUrl;
    },
  },
  computed: {
    ...mapGetters({
      spinner: 'all/spinner',
    }),
  },
  mounted() {
    this.productModal = new Modal(this.$refs.productModal, {
      keyboard: false,
      backdrop: 'static',
    });
    this.$refs.productModal.addEventListener('hidden.bs.modal', () => {
      this.init();
    });
  },
  methods: {
    init() {
      this.tempProduct = {};
      this.image = '';
      this.due_date = 0;
      const forms = document.querySelector('.needs-validation');
      forms.classList.remove('was-validated');
    },
    modal(state) {
      switch (state) {
        case 'show':
          this.productModal.show();
          break;
        case 'hide':
          this.productModal.hide();
          break;
        default:
      }
    },
    updateProduct() {
      // 判斷輸入
      console.log('判斷');
      this.$emit('changeProducts', this.tempProduct);
      this.modal('hide');
      // let check = false; // 未通過
      // const forms = document.querySelectorAll('.needs-validation');
      // Array.prototype.slice.call(forms).forEach((form) => {
      //   form.addEventListener('submit', (event) => {
      //     console.log(form.checkValidity());
      //     if (!form.checkValidity()) {
      //       event.preventDefault();
      //       event.stopPropagation();
      //       check = false;
      //     } else {
      //       check = true;
      //     }
      //     form.classList.add('was-validated');
      //   }, false);
      // });
      // 非同步
      // console.log(this.tempProduct);
      // setTimeout(() => {
      //   if (check) {
      //     this.$emit('changeProducts', this.tempProduct);
      //   } else {
      //     this.$swal.fire({
      //       icon: 'error',
      //       title: '必填欄未填',
      //       text: '',
      //     });
      //   }
      // });
    },
    async uploadImage(e) {
      console.log(e);
      this.$refs.uploadImage.click();
      this.tempProduct.imageUrl = [];
      this.image = '';
      const vm = this;
      console.log(e.target.files);
      if (e.target.files === undefined) {
        return;
      }
      const file = e.target.files[0]; // 讀取圖片
      const fr = new FileReader();
      console.log(file);
      // eslint-disable-next-line no-shadow
      fr.onload = function (e) {
        vm.image = e.target.result;
      };
      fr.readAsDataURL(file);

      // 上傳圖片
      const formData = new FormData();
      formData.append('file-to-upload', file);
      this.$store.commit('all/SAVE_SPINNER', true);
      // 圖片api上傳
      await this.axios.post('https://vue3-course-api.hexschool.io/api/traveltime1221/admin/upload', formData).then((res) => {
        console.log(res);
        this.$store.commit('all/SAVE_SPINNER', false);
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
        console.log(err.response);
        this.$store.commit('all/SAVE_SPINNER', false);
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
