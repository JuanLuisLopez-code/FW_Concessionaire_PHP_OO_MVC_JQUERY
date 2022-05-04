/*==================== AJAX PROMISE ====================*/
function ajaxPromise(sUrl, sType, sTData, sData = undefined) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: sUrl,
            type: sType,
            dataType: sTData,
            data: sData
        }).done((data) => {
            resolve(data);
        }).fail((jqXHR, textStatus, errorThrow) => {
            reject(errorThrow);
        });
    });
}

function move_login() {
    $(document).on('click', '#move_login', function() {
        if (localStorage.getItem('token') == null) {
            window.location.href = "index.php?page=login&op=view";
        }
    });
}

function move_shop() {
    $(document).on('click', '.shop', function() {
        window.location.href = "index.php?page=shop&op=view";
        localStorage.removeItem('details')
        localStorage.removeItem('move');
    });
}

function load_path() {
    let path = window.location.search.split('&');
    if (path[3] === 'verify') {
        let token_email_verify = path[2];
        let type = path[3];
        ajaxPromise('index.php?page=login&op=verify_email', 'POST', 'JSON', { token_email_verify, type })
            .then(function(data) {
                toastr.success('Email verificado, ya puede loguearse');
            })
    }
}

function check_login() {
    var token = localStorage.getItem('token');
    if (token) {
        ajaxPromise('?page=login&op=token_c', 'POST', 'JSON', { 'token': token })
            .then(function(data) {
                console.log(data)
                console.log("arriba check_login")
                if (data == 'Tiempo excedido') {
                    localStorage.removeItem('token');
                } else {
                    $('#move_login').empty();
                    $('#move_login').html(
                        '<img src="' + data[0].avatar + '" style="width:25"></img>' +
                        '<ul class="subs">' +
                        '<li><a>' + data[0].username + '</a></li>' +
                        '</ul>'
                    );
                    $('<li><a class="hsubs" id="log_out" onclick="log_out()">Log out</a></li>').appendTo('.nav');
                }
                setInterval(function() {
                    check_login_interval();
                }, 600000);
            })
    }
}

function log_out() {
    localStorage.removeItem('token');
    $('#log_out').remove();
    $('#move_login').remove();
    $('<li><a class="hsubs" id="move_login">Indetify</a></li>').appendTo('.nav');
    // ajaxPromise('modules/login/crtl/crtl_login.php?op=delete_session', 'POST', 'JSON')
    toastr["success"]("Session cerrada");
    location.reload();
    localStorage.removeItem('move');
    localStorage.removeItem('id');
    localStorage.removeItem('details');
}


$(document).ready(function() {
    load_path();
    move_login();
    move_shop();
    check_login();
})