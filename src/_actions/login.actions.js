import LoginConstants from '../_constants/login.constants';
import axios from "axios";
import {history} from '../_helpers/history';

const LoginAction = {
    LogIn, logOut
}
export default LoginAction;

function LogIn(data){
    data.email = data.username;
    delete data.username;
    function loginRequest () {
        return {
            type: LoginConstants.LOGIN_REQUEST,
        }
    }

    function loginSuccess (user) {
        return{
            type: LoginConstants.LOGIN_SUCCESS,
        }
    }

    function loginFailure () {
        return{
            type: LoginConstants.LOGIN_FAILURE,
            
        }
    }

    return (dispatch) => {
        dispatch(loginRequest())
        axios.post(`http://192.168.2.166:9001/login_services/login`, {formData: data})
        .then(response =>{
            localStorage.setItem("accessToken", response.data.data.accessToken);
            localStorage.setItem("profile", response.data.data.image);
            history.push("/dashboard")
            dispatch(loginSuccess(response.data))
         }).catch(error =>{
            dispatch(loginFailure(error.data));
        })
    }
}

function logOut() {
    return { 
       type: LoginConstants.LOGOUT 
    };
}