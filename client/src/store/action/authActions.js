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
                    dispatch({ type: 'USER_EXIST', userExist: true })
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
                if (res.state !== "USER_EXIST") {
                    console.log(res)
                    dispatch({ type: 'SIGN_IN', data: res.data })
                } else {
                    dispatch({ type: 'SIGN_IN', data: res.data })
                }

            },
            error: (error) => {
                // dispatch the err  with type of action to authReducer
                dispatch({ type: 'SIGN_IN_ERROE', data: error })
            }
        })

    }
}