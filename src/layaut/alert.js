import Swal from 'sweetalert2';

export const alert = (iconError, message) => {

	const Toast = Swal.mixin({
		toast: true,
		position: 'top',
		showConfirmButton: false,
		timer: 2000,
	})

	Toast.fire({
		icon: iconError,
		title: message,
	});
}