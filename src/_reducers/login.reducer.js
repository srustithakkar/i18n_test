import LoginConstants from '../_constants/login.constants'

const InitialValues = {
    isError: false
}

const logInReducer = (state = InitialValues, action) =>{
switch(action.type){
    case LoginConstants.LOGIN_REQUEST: {
        return {
            ...state,
            loading: true,
        }
    }
    case LoginConstants.LOGIN_SUCCESS:{
        return{
            ...state,
            user: action.payload.user,
            loading: false,
            isError: false
        }
    }
    case LoginConstants.LOGIN_FAILURE:{
        return{
            ...state,
            loading:false,
            isError: true
        }
    }
    case LoginConstants.LOGOUT:
    return {
        loading:false
    };
    default:
        return state
}
}

export default logInReducer;