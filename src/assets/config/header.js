import token from "../constants/tokenInfo";
import urls from "../constants/urls";
import axios from "axios";

const xapp = async () => {
    try{
        let tokenResult = await axios.post(`${process.env.VUE_APP_ROOT}${urls.xapp_token}`,{
            client_id: token.client_id,
            client_secret: token.client_secret,
        });

        console.log(tokenResult.data)
        return tokenResult
    } catch(e) {
        console.log(e)
    }
}


export default {
    xapp
}
