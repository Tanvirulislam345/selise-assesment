import Swal from 'sweetalert2';
export const alert = (icon, message) => {
    Swal.fire(
        {
            text: message,
            icon: icon
        }
    )
}