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

function move_shop() {
    $(document).on('click', '.shop', function() {
        window.location.href = "index.php?page=shop&op=view";
        localStorage.removeItem('details')
        localStorage.removeItem('move');
    });
}


$(document).ready(function() {
    move_shop();
})