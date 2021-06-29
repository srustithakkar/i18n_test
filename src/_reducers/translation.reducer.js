import TranslationConstants from "../_constants/translation.constant";

const InitialState =  {
}
const InitialLanguage = {
    selectedLanguage: "en",
}
const translationReducer = (state = InitialState, action) => {
    switch(action.type){
        case TranslationConstants.GET_TRANSLATION_REQUEST : {
            return {
                ...state,
                Loading: true
            }
        }
        case TranslationConstants.GET_TRANSLATION_SUCCESS : {
            debugger
            return {
                ...state,
                data: action.payload.data,
                Loading: false
            }
        }
        case TranslationConstants.GET_TRANSLATION_FAILURE : {
            return {
                ...state,
                Loading: false
            }
        }
        default: 
        return state
    }
}

export const languageReducer = (state = InitialLanguage, action) => {
    switch(action.type){
        case TranslationConstants.CHANGE_LANGUAGE : {
            return {
                ...state,
                selectedLanguage: action.payload
            }
        }
        default:
            return state
    }
}




export default translationReducer;
