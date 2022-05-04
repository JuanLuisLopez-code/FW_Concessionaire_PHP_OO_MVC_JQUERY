function login() {
    if (validate_login() != 0) {
        var array = $('#login__form').serialize();
        ajaxPromise('?page=login&op=login_c', 'POST', 'JSON', array)
            .then(function(data) {
                if (data == 'contraseña incorrecta') {
                    $("#error_pass_login").html('La contraseña no es correcta');
                } else if (data == 'user no existe') {
                    $("#error_user_login").html('Este usuario no existe');
                } else {
                    localStorage.setItem('token', data);
                    token_c();
                }
            })
    }
}

function token_c() {
    var token = localStorage.getItem('token');
    ajaxPromise('?page=login&op=token_c', 'POST', 'JSON', { 'token': token })
        .then(function(data) {
            $('#move_login').empty();
            $('#move_login').html(
                '<img src="' + data[0].avatar + '" style="width:25"></img>' +
                '<ul class="subs">' +
                '<li><a>' + data[0].username + '</a></li>' +
                '<li class="log_out" id="log_out"><a>LOG OUT</a></li>' +
                '</ul>'
            );
            if (localStorage.getItem('details')) {
                toastr['success']("Volviendo a los detalles del coche");
                setTimeout(' window.location.href = "index.php?page=shop&op=view"; ', 2000);
            } else if (localStorage.getItem('move')) {
                console.log("hola")
                var move = JSON.parse(localStorage.getItem('move'));
                toastr['success']("Volviendo a las compras");
                setTimeout(' window.location.href = "' + move[0] + '"; ', 2000);
            } else {
                toastr["success"]("Logueado con exito");
                setTimeout(' window.location.href = "index.php?page=home&op=view"; ', 2000);
            }
        })
}

function key_login() {
    $("#login__form").keypress(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            e.preventDefault();
            login();
        }
    });
}

function button_login() {
    $('#login').on('click', function(e) {
        e.preventDefault();
        login();
    });
}

function validate_login() {
    var error = false;

    if (document.getElementById('user_login').value.length === 0) {
        document.getElementById('error_user_login').innerHTML = "Tienes que escribir el usuario";
        error = true;
    } else {
        document.getElementById('error_user_login').innerHTML = "";
    }

    if (document.getElementById('pass_login').value.length === 0) {
        document.getElementById('error_pass_login').innerHTML = "Tienes que escribir la contraseña";
        error = true;
    } else {
        document.getElementById('error_pass_login').innerHTML = "";
    }

    if (error == true) {
        return 0;
    } else {
        return 1;
    }
}

$(document).ready(function() {
    key_login();
    button_login();
});