import TranslationConstants from "../_constants/translation.constant"
import axios from "axios"

const getTranslationAction ={ 
    getTranslation, changeLanguage
}
export default getTranslationAction;

function changeLanguage(lang) {
    return{
        type : TranslationConstants.CHANGE_LANGUAGE,
        payload: lang
    }
}

function getTranslation() {
    debugger
    function getTranslationRequest(){
        return {
            type: TranslationConstants.GET_TRANSLATION_REQUEST ,
        }
    }
    function getTranslationSuccess(data){
        return {
            type: TranslationConstants.GET_TRANSLATION_SUCCESS ,
            payload: data
        }
    }
    function getTranslationFailure(){
        return {
            type: TranslationConstants.GET_TRANSLATION_FAILURE ,
        }
    }

    return (dispatch) => {
        dispatch(getTranslationRequest())
        axios.get(`http://192.168.2.166:9001/translaiton_services/get_translations`)
        .then(response =>{
            dispatch(getTranslationSuccess(response.data))
         }).catch(error =>{
            dispatch(getTranslationFailure(error.data));
        })
    }
}

