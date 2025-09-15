import { createComponent, deleteComponent } from './createComponent';
import loaderVue from './loader.vue';

export default {
  install(app) {
    app.config.globalProperties.$loader = {
      show() {
        createComponent(loaderVue, { isLoading: true });
      },
      hide() {
        deleteComponent('loader-root');
      }
    };
    app.provide('$loader');
  }
};
