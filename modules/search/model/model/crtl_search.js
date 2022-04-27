function load_brands() {
    ajaxPromise('index.php?page=search&op=load_brands', 'POST', 'JSON')
        .then(function(data) {
            $('<option>Brand</option>').attr('selected', true).attr('disabled', true).appendTo('.search_brand')
            for (row in data) {
                $('<option value="' + data[row].id_brand + '">' + data[row].brand_name + '</option>').appendTo('.search_brand')
            }
        }).catch(function(error) {
            console.log(error)
                // window.location.href = "index.php?modules=exception&op=503&error=fail_load_brands&type=503";
        });
}

function load_category(brand) {
    $('.search_category').empty();
    if (brand == undefined) {
        ajaxPromise('index.php?page=search&op=search_category_null', 'POST', 'JSON')
            .then(function(data) {
                $('<option>Category</option>').attr('selected', true).attr('disabled', true).appendTo('.search_category')
                for (row in data) {
                    $('<option value="' + data[row].id_categoria + '">' + data[row].cat_name + '</option>').appendTo('.search_category')
                }
            }).catch(function() {
                // window.location.href = "index.php?modules=exception&op=503&error=fail_load_category&type=503";
            });
    } else {
        ajaxPromise('index.php?page=search&op=search_category', 'POST', 'JSON', brand)
            .then(function(data) {
                for (row in data) {
                    $('<option value="' + data[row].id_categoria + '">' + data[row].cat_name + '</option>').appendTo('.search_category')
                }
            }).catch(function() {
                // window.location.href = "index.php?modules=exception&op=503&error=fail_loas_category_2&type=503";
            });
    }
}

function launch_search() {
    load_brands();
    load_category();
    $(document).on('change', '.search_brand', function() {
        let brand = $(this).val();
        if (brand === 0) {
            load_category();
        } else {
            load_category({ brand });
        }
    });
}

function autocomplete() {
    $("#autocom").on("keyup", function() {
        let sdata = { complete: $(this).val() };
        if (($('.search_brand').val() != 0)) {
            sdata.brand = $('.search_brand').val();
            if (($('.search_brand').val() != 0) && ($('.search_category').val() != 0)) {
                sdata.category = $('.search_category').val();
            }
        }
        if (($('.search_brand').val() == undefined) && ($('.search_category').val() != 0)) {
            sdata.category = $('.search_category').val();
        }
        ajaxPromise('index.php?page=search&op=autocomplete', 'POST', 'JSON', sdata)
            .then(function(data) {
                console.log(data);
                $('#searchAuto').empty();
                $('#searchAuto').fadeIn(10000000);
                for (row in data) {
                    $('<div></div>').appendTo('#search_auto').html(data[row].city).attr({ 'class': 'searchElement', 'id': data[row].city });
                }
                $(document).on('click', '.searchElement', function() {
                    $('#autocom').val(this.getAttribute('id'));
                    $('#search_auto').fadeOut(1000);
                });
                $(document).on('click scroll', function(event) {
                    if (event.target.id !== 'autocom') {
                        $('#search_auto').fadeOut(1000);
                    }
                });
            }).catch(function() {
                $('#search_auto').fadeOut(500);
            });
    });
}

function button_search() {
    $('#search-btn').on('click', function() {
        var search = [];
        if ($('.search_brand').val() != undefined) {
            search.push({ "brand": [$('.search_brand').val()] })
            if ($('.search_category').val() != undefined) {
                search.push({ "category": [$('.search_category').val()] })
            }
            if ($('#autocom').val() != undefined) {
                search.push({ "city": [$('#autocom').val()] })
            }
        } else if ($('.search_brand').val() == undefined) {
            if ($('.search_category').val() != undefined) {
                search.push({ "category": [$('.search_category').val()] })
            }
            if ($('#autocom').val() != undefined) {
                search.push({ "city": [$('#autocom').val()] })
            }
        }
        localStorage.removeItem('filters_search');
        if (search.length != 0) {
            localStorage.setItem('filters_search', JSON.stringify(search));
        }
        window.location.href = 'index.php?page=shop&op=view';
    });
}

$(document).ready(function() {
    launch_search();
    autocomplete();
    button_search();
});