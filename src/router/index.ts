import { route } from 'quasar/wrappers';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

console.log(process.env.VUE_ROUTER_BASE);

export default route(function (/* { store, ssrContext } */) {
  const Router = createRouter({
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createWebHistory(),
  });

  return Router;
});
