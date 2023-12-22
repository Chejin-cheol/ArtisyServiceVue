import getters from '@/store/getters/artiestGetters'
import actions from '@/store/actions/artistActions'
import mutations from '@/store/mutations/artiestMut'

export default {
    namespaced: true,
    state: () => ({
        list: []
    }),
    getters,
    actions,
    mutations
};
