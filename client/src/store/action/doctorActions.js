import $ from 'jquery';


// function to edit the state inside redux to open the modal
export const openModal= (isOpen) => {

    return (dispatch, getState) => {
        dispatch({
            type: "OPEN_MODAL",
            data: isOpen
        })
    }


}


