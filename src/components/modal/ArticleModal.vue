<template>
  <div
    class="modal fade"
    id="articleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="articleModal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h4 class="modal-title font-weight-bold" id="exampleModalLabel">
            <span v-if="tempArticle.id == undefined">新增貼文</span>
            <span v-else>編輯貼文</span>
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!--表單-->
          <form class="row needs-validation" novalidate>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="title" class="form-label">
                  <small class="text-danger">*</small>
                  標題
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempArticle.title"
                  placeholder="請輸入標題"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.imageUrl"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">
                  <small class="text-danger">*</small>
                  作者
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="tempArticle.author"
                  placeholder="請輸入標題"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="create_at">
                  <small class="text-danger">*</small>
                  文章建立日期
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="create_at"
                  v-model="create_at"
                  required
                />
              </div>
            </div>
            <div class="col-md-8">
              <label for="tag" class="form-label">標籤</label>
              <div class="row gx-1 mb-3">
                <div
                  class="col-md-3 mb-1"
                  v-for="(label, key) in tempArticle.tag"
                  :key="key"
                >
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control form-control"
                      id="tag"
                      v-model="tempArticle.tag[key]"
                      placeholder="請輸入標籤"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="tempArticle.tag.splice(key, 1)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
                <div
                  class="col-md-2 mb-1"
                  v-if="
                    tempArticle.tag[tempArticle.tag.length - 1] ||
                    !tempArticle.tag.length">
                  <button
                    class="btn btn-secondary btn-sm w-100 text-white"
                    @click="tempArticle.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
              <label for="content" class="form-label">
                <small class="text-danger">*</small>
                文章描述
              </label>
              <div class="mb-3">
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempArticle.description"
                  required
                ></ckeditor>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempArticle.isPublic"
                    id="isPublic"
                    required
                  />
                  <label class="form-check-label" for="isPublic">
                    <small class="text-danger">*</small>
                    是否公開
                  </label>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-gray-100 mr-2"
                data-bs-dismiss="modal"
              >
                取消
              </button>
              <button
                type="submit"
                class="btn btn-secondary text-white"
                @click="updateArticle()"
              >
                確認
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    article: {
      type: Object,
      default() {
        return {
          articleModal: '',
        };
      },
    },
  },
  data() {
    return {
      tempArticle: {
        tag: [''],
      },
      create_at: 0,
      // 參考：https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html#editor
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', 'typing', 'bold', 'italic', '|', 'link'],
      },
    };
  },
  watch: {
    article() {
      this.tempArticle = {
        ...this.article,
        tag: this.article.tag || [],
        isPublic: this.article.isPublic || false,
      };
      [this.create_at] = new Date(this.tempArticle.create_at * 1000)
        .toISOString()
        .split('T');
    },
    create_at() {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000);
    },
  },
  mounted() {
    this.articleModal = new Modal(this.$refs.articleModal, {
      keyboard: false,
      backdrop: 'static',
    });
    this.$refs.articleModal.addEventListener('hidden.bs.modal', () => {
      this.init();
    });
  },
  methods: {
    init() {
      this.tempArticle = {
        tag: [''],
      };
      this.create_at = 0;
      const forms = document.querySelector('.needs-validation');
      forms.classList.remove('was-validated');
    },
    modal(state) {
      switch (state) {
        case 'show':
          this.articleModal.show();
          break;
        case 'hide':
          this.articleModal.hide();
          break;
        default:
      }
    },
    updateArticle() {
      let check = false; // 未通過
      const forms = document.querySelectorAll('.needs-validation');
      console.log(forms);
      Array.prototype.slice.call(forms).forEach((form) => {
        console.log(form);
        form.addEventListener('submit', (event) => {
          console.log(event);
          console.log(form.checkValidity());
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            check = false;
          } else {
            check = true;
          }
          form.classList.add('was-validated');
        }, false);
      });
      // 非同步
      setTimeout(() => {
        if (check) {
          this.$emit('update-article', this.tempArticle);
          this.modal('hide');
          this.init();
        }
      });
    },
  },
};
</script>

<style>
.ck-editor__editable_inline {
  min-height: 300px;
}
</style>
