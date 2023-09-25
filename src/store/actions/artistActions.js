import {get} from '@/assets/utils/request'
import urls from "@/assets/constants/urls";

export default {
    async ac_list({commit}) {
        try{
            let artistsList = await get(`${process.env.VUE_APP_ROOT}${urls.artists}`)

            console.log(artistsList)
            commit('mut_list',artistsList)
        }catch(e){
            console.log(e)
        }
    },
}
