import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import router from './router'

// const Yacp = definePreset(Aura, {
//     semantic: {
//         primary: {
//             50: '{violet.50}',
//             100: '{violet.100}',
//             200: '{violet.200}',
//             300: '{violet.300}',
//             400: '{violet.400}',
//             500: '{violet.500}',
//             600: '{violet.600}',
//             700: '{violet.700}',
//             800: '{violet.800}',
//             900: '{violet.900}',
//             950: '{violet.950}',
//         },
//         colorScheme: {
//             light: {
//                 formField: {
//                     hoverBorderColor: '{primary.color}',
//                 },
//                 surface: {
//                     0: '#fff',
//                     50: '{slate.50}',
//                     100: '{slate.100}',
//                     200: '{slate.200}',
//                     300: '{slate.300}',
//                     400: '{slate.400}',
//                     500: '{slate.500}',
//                     600: '{slate.600}',
//                     700: '{slate.700}',
//                     800: '{slate.800}',
//                     900: '{slate.900}',
//                     950: '{slate.950}',
//                 },
//             },
//             dark: {
//                 formField: {
//                     hoverBorderColor: '{primary.color}',
//                 },
//                 surface: {
//                     0: '#fff',
//                     50: '{neutral.50}',
//                     100: '{neutral.100}',
//                     200: '{neutral.200}',
//                     300: '{neutral.300}',
//                     400: '{neutral.400}',
//                     500: '{neutral.500}',
//                     600: '{neutral.600}',
//                     700: '{neutral.700}',
//                     800: '{neutral.800}',
//                     900: '{neutral.900}',
//                     950: '{neutral.950}',
//                 },
//             },
//         },
//     },
// })

const Noir = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}',
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{zinc.950}',
                    inverseColor: '#ffffff',
                    hoverColor: '{zinc.900}',
                    activeColor: '{zinc.800}',
                },
                highlight: {
                    background: '{zinc.950}',
                    focusBackground: '{zinc.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff',
                },
            },
            dark: {
                primary: {
                    color: '{zinc.50}',
                    inverseColor: '{zinc.950}',
                    hoverColor: '{zinc.100}',
                    activeColor: '{zinc.200}',
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)',
                },
            },
        },
    },
})

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            darkModeSelector: '.dark-mode',
        },
    },
})
app.use(router)

app.mount('#app')
