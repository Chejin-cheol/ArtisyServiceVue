import axios from 'axios'
import {xapp} from '../config/token'

// axios.defaults.withCredentials = true;

export const get = async (url,data) => {
    try{
        let token = await xapp();
        let response = await axios.get(url, {
            params: {
                ...data,
                total_count: 1,
                size: 100
            },
            headers: {
                'X-XAPP-Token': token,
                'Content-Type': 'application/json'
            }
        })

        return response.data
    }
    catch(e){
        console.log(e.stack)
    }
}


export const post = async (url,data) => {
    try{
        await axios.post(url, data, {
            headers:{
                'X-Access-Token': await xapp(),
                'ContentType': 'application/json'
            }
        })
    }
    catch(e){
        console.log(e)
    }
};

