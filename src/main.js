import '@/assets/scss/index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Loader from './plugins/Loader';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App);

// toast plugin
app.use(ToastPlugin, {
  position: 'top-right'
});

app.use(Loader);
app.use(router);

app.mount('#app');
