import $ from 'jquery';

// actoin for redux to make send  sign up data to server
export const signUp = (user) => {
    return (dispatch, getState) => {
        // asyc 
        // make post request to sign up      
        $.ajax({
            url: '/sign-up',
            type: 'POST',
            data: JSON.stringify({ ...user }),
            contentType: 'application/json',
            success: (res) => {
                // dispatch the data from response  with type of action to authReducer
                if (res.state !== "USER_EXIST") {
                    dispatch({ type: 'SIGN_UP', data: res.data })
                } else {
                    dispatch({ type: 'SIGN_UP_USER_EXIST', userExist: true })
                }

            },
            error: (error) => {
                // dispatch the err  with type of action to authReducer
                dispatch({ type: 'SIGN_UP_ERROR', data: error })
            }
        })

    }
}

// actoin for redux to make send  sign in data to server
export const signIn = (user) => {
    return (dispatch, getState) => {
        $.ajax({
            url: '/login',
            type: 'POST',
            data: JSON.stringify(user),
            contentType: 'application/json',
            success: (res) => {
                // dispatch the data from response  with type of action to authReducer
                if (res.state === "LOGIN_SUCCESS") {
                    dispatch({ type: 'LOGIN', data: res.data, correctLogin: true})
                } else {
                    dispatch({ type: 'LOGIN_NOT_SUCCESS', correctLogin: false })
                }

            },
            error: (error) => {
                // dispatch the err  with type of action to authReducer
                dispatch({ type: 'LOGIN_ERROE', data: error })
            }
        })

    }
}

// actoin for redux to make send  sign in data to server
export const logout = () => {
    return (dispatch, getState) => {
        $.ajax({
            url: '/logout',
            type: 'POST',
            contentType: 'application/json',
            success: (res) => {
                // dispatch the data from response  with type of action to authReducer
                if (res.state === "logout") {
                    dispatch({ type: 'LOGOUT', logout: true})
                }
            },
            error: (error) => {
               console.log("Error during log out")
            }
        })

    }
}