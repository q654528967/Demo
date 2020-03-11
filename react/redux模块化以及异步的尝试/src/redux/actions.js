import { ADDNAME,ADDAGE,YIBU } from "./action-type";

//包含所有的action creator
export const addNameCreater = (name) =>({type:ADDNAME,data:name})
export const addAgeCreater = (age) => ({type:ADDAGE,data:age})
export const addNameAsync = (subtitle) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(test(subtitle))
        },2000);
    }
}
export const test =(data)=>({
    type:YIBU,data
})