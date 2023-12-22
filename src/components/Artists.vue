<template>
  <div>Artists</div>
</template>

<script>
// import {mapActions} from 'vuex'
import {onMounted} from "vue";
import {useStore} from 'vuex'

export default {
  name: "Artists",
  setup: () => {

    const {dispatch} = useStore()
    onMounted(() => {
      list();
    })

    function list() {
      dispatch('artistStore/ac_list',null)
    }

    return {
      list
    }
  }

}
</script>

<style scoped>

</style>
