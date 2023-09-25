import {get} from '@/assets/utils/request'
import urls from "@/assets/constants/urls";

export default  {
    async ac_list({commit}) {
        try{
            let artworksList = await get(`${process.env.VUE_APP_ROOT}${urls.artworks}`)

            console.log(artworksList)
            commit('mut_list',artworksList)
        }catch(e){
            console.log(e)
        }
    },
}
