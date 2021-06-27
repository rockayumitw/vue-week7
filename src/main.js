import { createApp } from 'vue';

// 驗證表單
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 其他plugin
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import bootstrap from 'bootstrap';
import CKEditor from '@ckeditor/ckeditor5-vue';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { date, currency } from './methods/filter';

// 原始引用
import App from './App.vue';
import router from './router';
import store from './store';

// vi18
import VueI18n from './lang';

// scss 載入
import './assets/scss/app.scss';

// 驗證表單設定
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure(
  {
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true, // 當輸入任何內容直接進行驗證
  },
);

setLocale('zh_TW'); // 設定預設語系

// https://rpg.hexschool.com/user/task/19494/show
// https://github.com/hexschool/live-vue3-training-chapter-works/blob/master/week6/vue.config.js

// vuei18N
// https://ithelp.ithome.com.tw/articles/10194177
// https://vue-i18n.intlify.dev/api/general.html#availablelocales

// fontawesome載入
library.add(faCoffee, faGooglePlus, faSpinner);
const app = createApp(App);

app.config.globalProperties.$filters = {
  date,
  currency,
};

app.use(store);
app.use(VueI18n);
app.use(router);
app.use(bootstrap);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(VueLoading, {
  loader: 'dots',
});
app.use(CKEditor);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('Loading', VueLoading);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
