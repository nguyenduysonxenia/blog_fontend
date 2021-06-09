import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toast = (message: string)=>{
  return toast.success(message,{ position:"top-center"})
}

export default Toast