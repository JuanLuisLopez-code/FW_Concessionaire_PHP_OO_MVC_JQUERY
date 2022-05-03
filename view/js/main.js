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
        window.location.href = "index.php?page=login&op=view";
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
                console.log(data)
                toastr.success('Email verificado, ya puede loguearse');
            })
    }
}


$(document).ready(function() {
    load_path();
    move_login();
    move_shop();
})