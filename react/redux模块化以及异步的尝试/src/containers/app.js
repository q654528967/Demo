import React from 'react'
import {connect} from 'react-redux'
import {addNameCreater,addAgeCreater,addNameAsync,test} from '../redux/actions'
import AddName from '../component/AddName.js'

let mapStateToProps=state=>({title:state.addName,subtitle:state.addAge,test1:state.yiBu});
let mapDispatchToProps=dispatch=>{
    return{
        testclick:value=>{
            dispatch(test(value))
        },
        addNameCreater:value=>{
            dispatch(addNameCreater(value))
        },
        addAgeCreater:value=>{
            dispatch(addAgeCreater(value))
        },
        addNameAsync:value=>{
            dispatch(addNameAsync(value))
        }

    }
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(AddName)