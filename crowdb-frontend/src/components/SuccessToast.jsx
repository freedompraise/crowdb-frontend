import { toast } from 'sonner'

const successToast = (message, duration = 2000) => {
	toast.success(message, {
		position: 'top-right',
		autoClose: duration,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})
}

export default successToast
