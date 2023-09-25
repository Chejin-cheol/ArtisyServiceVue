import getters from '../getters/artworkGetters'
import actions from '../actions/artworkActions'
import mutations from '../mutations/artworkMut'


export default {
    namespaced: true,
    state: () => ({
        list: []
    }),
    getters,
    actions,
    mutations
}
