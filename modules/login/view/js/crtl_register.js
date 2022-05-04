function register() {
    if (validate_register() != 0) {
        var array = $('#register__form').serialize();
        ajaxPromise('index.php?page=login&op=register_c', 'POST', 'JSON', array)
            .then(function(data) {
                if (data == "Usuarios existente") {
                    $("#error_username").html('El usuario ya esta registrado');
                } else if (data == "Email existente") {
                    $("#error_email").html('El email ya esta registrado');
                } else {
                    toastr.success('Porfavor verifique su email');
                    setTimeout(' window.location.href = "index.php?page=home&op=view"; ', 5000);
                }
            });
    }
}

function key_register() {
    $("#register__form").keypress(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            e.preventDefault();
            register();
        }
    });
}

function button_register() {
    $('#register').on('click', function(e) {
        e.preventDefault();
        register();
    });
}

function validate_register() {
    var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var error = false;

    if (document.getElementById('user').value.length === 0) {
        document.getElementById('error_username').innerHTML = "Tienes que escribir el usuario";
        error = true;
    } else {
        if (document.getElementById('user').value.length < 4) {
            document.getElementById('error_username').innerHTML = "El username tiene que tener 4 caracteres como minimo";
            error = true;
        } else {
            document.getElementById('error_username').innerHTML = "";
        }
    }
    if (document.getElementById('pass').value.length === 0) {
        document.getElementById('error_password').innerHTML = "Tienes que escribir la contraseña";
        error = true;
    } else {
        if (document.getElementById('pass').value.length < 8) {
            document.getElementById('error_password').innerHTML = "La contraseña tiene que tener 8 caracteres como minimo";
            error = true;
        } else {
            document.getElementById('error_password').innerHTML = "";
        }
    }
    if (document.getElementById('email').value.length === 0) {
        document.getElementById('error_email').innerHTML = "Tienes que escribir un email";
        error = true;
    } else {
        if (!email_regex.test(document.getElementById('email').value)) {
            document.getElementById('error_email').innerHTML = "Email no valido, ejemplo: mysite@ourearth.com";
            error = true;
        } else {
            document.getElementById('error_email').innerHTML = "";
        }
    }

    if (error == true) {
        return 0;
    } else {
        return 1;
    }
}

$(document).ready(function() {
    key_register();
    button_register();
});