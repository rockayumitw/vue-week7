import { createStore } from 'vuex';

import all from './all';
import backend from './backend';
import frontend from './frontend';

export default createStore({
  namespaced: true,
  modules: {
    all,
    backend,
    frontend,
  },
});
