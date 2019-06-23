import axios from 'axios';
const host = 'http://localhost:4000/api';
export const setToken = token =>{
    if(token){
        axios.defaults.headers.common['Authoriazation']=`Bearer ${token}`;
    }
    else{
        delete axios.defaults.headers.commmon['Authorization'];
    }

};

export const call = async (method,path,data)=>{
    const response = await axios[method](`${host}/${path}`, data);
    return response;

};

export default {call,setToken};