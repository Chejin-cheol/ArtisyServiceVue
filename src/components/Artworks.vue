<template>
  <div>Artworks</div>
</template>

<script>
import {onMounted} from "vue";
import {useStore} from 'vuex'

export default {
  name: "Artworks",
  setup() {
    const {dispatch} = useStore()
    onMounted(() => {
      list();
    })

    function list() {
      dispatch('artworksStore/ac_list',null)
    }

    return {
      list
    }
  }
}
</script>

<style scoped>

</style>
