import axios from "axios";
import config from "../../common/authHeaders";
const LIST_CONFIGURATION_OPTION = 'LIST_CONFIGURATION_OPTION';
const ADD_CONFIGURATION_OPTION = 'ADD_CONFIGURATION_OPTION';
const DELETE_CONFIGURATION_OPTION='DELETE_CONFIGURATION_OPTION';
const VIEW_CONFIGURATION_OPTION='VIEW_CONFIGURATION_OPTION'
const UPDATE_CONFIGURATION_OPTION='UPDATE_CONFIGURATION_OPTION';
const EDIT_CONFIGURATION_OPTION='EDIT_CONFIGURATION_OPTION';
export function AC_ADD_CONFIGURATION_OPTION(userData) {
    console.log('======Add CONFIGURATION=========', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/configOption/addUpdateConfigOption", userData,config)
            .then(({ data }) => {
                dispatch({ type: ADD_CONFIGURATION_OPTION, payload: data })
            });
    };
}

export function AC_LIST_CONFIGURATION_OPTION(formdata) {
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/configOption/listConfigOption",formdata,config)
            .then(({ data }) => {
                console.log('=======List CONFIGURATION========', data)
                dispatch({ type: LIST_CONFIGURATION_OPTION, payload: data })
            });
    }
}
export function AC_DELETE_CONFIGURATION_OPTION(formdata){
    console.log('===-=-=action -=-=-',formdata)
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/configOption/deleteConfigOption",formdata,config)
        .then(({data}) => {
           
            dispatch({type:DELETE_CONFIGURATION_OPTION,payload:data})
        });
    };
}
export function AC_VIEW_CONFIGURATION_OPTION(formdata){
    console.log('===-=-=action -=-=-',formdata)
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/configOption/viewConfigOption",formdata,config)
        .then(({data}) => {
            dispatch({type:VIEW_CONFIGURATION_OPTION,payload:data})
        });
    };
}
export function AC_EDIT_CONFIGURATION_OPTION(formData) {
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/configOption/addUpdateConfigOption", formData,config)
            .then(({ data }) => {
                dispatch({ type: EDIT_CONFIGURATION_OPTION, payload: data });
            });
    }
}
export function AC_HANDLE_INPUT_CHANGE(name,value){
    return function(dispatch){
            dispatch({type:UPDATE_CONFIGURATION_OPTION, name:name, value:value})
    };
}