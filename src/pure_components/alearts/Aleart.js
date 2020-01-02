import Swal from 'sweetalert2'


export const Aleart = (type, title) => {

    Swal.fire({
        position: 'center',
        type: type,
        title: title,
        showConfirmButton: false,
        timer: 2000
    })
}

export const AleartYesNo = (title) => {
    Swal.fire({
        title: 'Are you sure?',
        text: title,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}