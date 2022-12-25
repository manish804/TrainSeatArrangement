import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


// toast on successfully responce
export const success = (message) => {
    toast.success(message, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    })
}

// toast on error responce
export const error = (message) => {
    toast.error(message, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    })
}