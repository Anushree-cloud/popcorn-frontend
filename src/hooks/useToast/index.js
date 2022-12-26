import { showMessage } from "./store/toastSlice";

export default (dispatch) => {

    function toast(message, options){
        dispatch(showMessage({
            message,
            autoHideDuration: 3000,
            anchorOrigin: {
                vertical  : 'bottom',
                horizontal: 'right'
            },
        }));
    }

    toast.success = function(message, options){
        dispatch(showMessage({
            message,
            autoHideDuration: 3000,
            anchorOrigin: {
                vertical  : 'bottom',
                horizontal: 'right'
            },
            variant: "success",
            ...options
        }));
    }

    toast.error = function(message, options){
        dispatch(showMessage({
            message,
            autoHideDuration: 3000,
            anchorOrigin: {
                vertical  : 'bottom',
                horizontal: 'right'
            },
            variant: "error",
            ...options
        }));
    }

    return toast;
}