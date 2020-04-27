<template>
  <v-app>
    <v-navigation-drawer
      src="./assets//fondo12.jpg"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      dark
      app
    >
      <v-list>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.route"
            link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed src="./assets/fondo12.jpg" app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <img
        height="60"
        src="https://cloud.ibm.com/registration/images/ibm-cloud-svg-lockup-white.svg"
      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      
    </v-app-bar>

    <v-content>
      <v-container grid-list-md>
        <!-- <v-speed-dial absolute v-model="fab" :top="top" :right="right" :direction="direction">
          <template v-slot:activator>
            <v-btn v-model="fab" color="blue darken-2" dark fab>
              <v-icon v-if="fab">fa-times</v-icon>
              <v-icon v-else>fa-comments</v-icon>
            </v-btn>
          </template>
          <v-dialog v-model="fab" eager scrollable max-width="450px">
      
      <v-card fab>
        <v-card-title>CHAT AYUDA</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 450px; padding: 0%; margin: 0%;">
              <iframe style="margin: 2px;  outline: none;" width="440" height="430"
              src="https://watson-assistant-ibmcloudmeetup.mybluemix.net">
              </iframe>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="fab = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-speed-dial> -->

        <router-view/>
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app dark>
      <span>&copy; IBM - 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
          { title: 'Inicio', icon: 'fa-home', route:'/'},
          { title: 'Calendario', icon: 'fa-calendar',route:'/calendar' },
          { title: 'Encuestas', icon: 'fa-table',route:'/survey' },
          //{ title: 'Registro evento', icon: 'fa-handshake',route:'/registroev' },
        ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "",

      direction: "bottom",
      fab: false,
      top: true,
      right: true,
      dialog: true,
      country:''
    };
  },
  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    }
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  }
};
</script>
<style scoped>
.iframe{
padding: 0%;
margin: 0%;
}
</style>
