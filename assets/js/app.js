import Menu from './Components/Generic/Menu';
import Vue from 'vue';
import KookooVue from './KooKooVue';

Vue.use(KookooVue);

let headerVm = new Vue({
    el: "header",
    components: { topMenu: Menu }
});
