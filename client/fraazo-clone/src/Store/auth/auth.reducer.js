import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth.types"


let initialState = {
    signup: {
        loading: false,
        error: false,
        sucess: false,
        UserStoredDataFraazo: JSON.parse(localStorage.getItem('UserStoredDataFraazo')) || {}
    },
    login: {
        loading: false,
        error: false,
        wrongCred: false
    },
    isAuth: false
}


export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SIGNUP_LOADING: {
            return {
                ...state, signup: {
                    ...state.signup, loading: true, error: false, sucess: false
                }
            }
        }
        case SIGNUP_SUCCESS: {
            return {
                ...state, signup: {
                    ...state.signup, loading: false, error: false, sucess: true
                }, isAuth: true
            }
        }
        case SIGNUP_ERROR: {
            return {
                ...state, signup: {
                    ...state.signup, loading: false, error: true, sucess: false
                }, isAuth: false
            }
        }
        case LOGIN_LOADING: {
            return {
                ...state, login: {
                    ...state.login, loading: true, error: false, wrongCred: false
                }
            }
        }
        case LOGIN_SUCCESS: {
            if (payload.payload) {
                localStorage.setItem("loginAuth", payload.payload.username);
                state.isAuth = true;
                state.login.wrongCred = false;
            }
            else {
                state.isAuth = false;
                state.login.wrongCred = true;
            }
            return {
                ...state, login: {
                    ...state.login, loading: false, error: false
                },
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state, login: {
                    ...state.login, loading: false, error: true, wrongCred: true
                }, isAuth: false
            }
        }
        case LOGOUT: {
            localStorage.removeItem("signupAuth") || localStorage.removeItem("loginAuth")
            return {
                ...state, signup: {
                    ...state.signup, sucess: false
                }, login: {
                    ...state.login, wrongCred: false
                }, isAuth: false
            }
        }

        default: {
            return state
        }

    }
}