import { createI18n } from 'vue-i18n';
import tw from './tw.json';
import en from './en.json';

const i18n = createI18n({
  locale: tw,
  messages: {
    tw,
    en,
  },
});
export default i18n;
