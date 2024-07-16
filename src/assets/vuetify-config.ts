import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'mdi'
  },
  defaults: {
    VBtn: { variant: 'tonal', color: 'blue-darken-2' },
    VTextField: { variant: 'outlined', density: 'comfortable', color: 'blue' }
  }
})

export default vuetify
