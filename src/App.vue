<template>
    <v-app id="inspire">
      <v-navigation-drawer
          v-model="drawer"
          app
      >
        <v-list>
          <v-list-item
              title="Kun-App"
              subtitle="tripsimon3@gmail.com"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-calendar" title="Tréningový plán" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-dumbbell" title="Počítadlo sérií" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-weight-kilogram" title="Zápisník váhy" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
</template>


<script>
import MainPageView from "@/views/MainPageView";
export default {
  name: 'App',
  components:{
    MainPageView
  },
  data: () => ({
    drawer: null
  }),
}
</script>
