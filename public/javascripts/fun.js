
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
    var carrousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carrousel, {
        indicators: false
    });
    var sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);
    var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
    var img = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(img);
    var select = document.querySelectorAll('select');
    M.FormSelect.init(select);
});


function clicked(i) {
    let bot = document.getElementById(`delete${i}`);

    Swal.fire({
        title: 'Estas seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            bot.submit();
        }
    })
}


