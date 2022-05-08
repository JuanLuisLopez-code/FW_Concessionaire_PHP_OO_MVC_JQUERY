function recovery() {
    $(document).on('click', '.recovery', function() {
        $('.primera').hide();
        $('.recovery_wrap').show();
        key_recovery();
        button_recovery();
    })
}

function recovery_call() {
    if (validate_recovery() != 0) {
        var array = $('#recovery__form').serialize();
        ajaxPromise('?page=login&op=recovery_pass', 'POST', 'JSON', array)
            .then(function(data) {
                console.log(data);
            })
    }
}

function key_recovery() {
    $("#recovery__form").keypress(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            e.preventDefault();
            recovery_call();
        }
    });
}

function button_recovery() {
    $('#recovery').on('click', function(e) {
        e.preventDefault();
        recovery_call();
    });
}

function validate_recovery() {
    var error = false;

    if (document.getElementById('email_recovery').value.length === 0) {
        document.getElementById('error_email_recovery').innerHTML = "Tienes que escribir el usuario";
        error = true;
    } else {
        document.getElementById('error_email_recovery').innerHTML = "";
    }

    if (document.getElementById('pass_recovery').value.length === 0) {
        document.getElementById('error_pass_recovery').innerHTML = "Tienes que escribir la contraseña";
        error = true;
    } else {
        document.getElementById('error_pass_recovery').innerHTML = "";
    }

    if (error == true) {
        return 0;
    } else {
        return 1;
    }
}

$(document).ready(function() {
    recovery();
});