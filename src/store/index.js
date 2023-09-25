import { createStore } from 'vuex';
import artworksStore from '@/store/modules/artworkStore'
import artistStore from '@/store/modules/artistStore'

export default createStore({
    state: {
        status: ''
    },
    modules: {
        artworksStore,
        artistStore
    },
    getters: {},
    mutations: {},
    actions: {}
});
