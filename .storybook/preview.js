import vuetify from './../src/plugins/vuetify'
import Vue from 'vue'
Vue.use(vuetify)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  () => ({
    template: '<v-app><story/></v-app>',
    vuetify
  }),
]