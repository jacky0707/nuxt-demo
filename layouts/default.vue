<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-row justify="center">
        <v-col cols="8" sm="10">
          <v-row>
            <v-toolbar-title class="display-1">Nuxt Demo</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon large="">mdi-account</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      absolute
      app
      dark
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
