import TButton from './components/TButton.vue'
import SimpleButton from './components/SimpleButton.vue'

const install = (Vue, options) => {
    if (!options || !options.Vuetify) {
      throw new Error('Please initialise plugin with a Vuetify.')
    }
    
    Vue.use(options.Vuetify)
    Vue.component('t-button', TButton)
    Vue.component('simple-button', SimpleButton)
};

const VueLibTest = {
  install
};

export default VueLibTest;