import TButton from './components/TButton.vue'
// import Vuetify from 'vuetify'
// import vuetify from '@/plugins/vuetify' // path to vuetify export

const install = (Vue, option) => {
    if (!options || !options.Vuetify) {
      throw new Error('Please initialise plugin with a Vuetify.')
    }
    
    Vue.use(option.Vuetify)
    Vue.component('t-button', TButton)
};

const VueLibTest = {
  install
};

export default VueLibTest;
// import Vue from 'vue'
// import TButton from './components/TButton.vue'
// import vuetify from '@/plugins/vuetify' // path to vuetify export

// Vue.config.productionTip = false

// new Vue({
//   vuetify,
//   render: h => h(TButton),
// }).$mount('#app')