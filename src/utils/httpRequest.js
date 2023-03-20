import axios from "axios";

//env là environment là biến môi trường
console.log(process.env)

const httpRequest=axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,

})

export const get= async(path, options={})=>{
    const response = await httpRequest.get(path,options);
    return response.data;
}

export default httpRequest;


