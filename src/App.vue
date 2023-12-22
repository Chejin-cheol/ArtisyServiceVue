<template>
  <v-app>
<!--    <v-main>-->
<!--      <router-view/>-->
<!--    </v-main>-->


    <v-layout class="rounded rounded-md">
      <v-navigation-drawer>
        <v-list>
          <router-link :to="{name: 'Main'}">
            <v-list-item link title="Dashboard"></v-list-item>
          </router-link>
          <router-link :to="{name: 'Artists'}" >
            <v-list-item link title="Artists"></v-list-item>
          </router-link>

          <router-link :to="{name: 'Artworks'}" >
            <v-list-item link title="Artworks"></v-list-item>
          </router-link>

        </v-list>
      </v-navigation-drawer>

      <v-app-bar title="Application bar"></v-app-bar>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <router-view/>
      </v-main>
    </v-layout>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
