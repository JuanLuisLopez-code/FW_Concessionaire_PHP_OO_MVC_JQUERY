function ajaxForSearch(durl, sData = undefined, total_prod = 0, items_page = 3, filtering = false) {
    localStorage.removeItem('details');
    let redirect = [];
    redirect.push("index.php?page=shop&op=view");
    if (total_prod != 0) {
        if (localStorage.getItem('id')) {
            var move_id = JSON.parse(localStorage.getItem('id'))
        }
        redirect.push(total_prod);
        localStorage.setItem('move', JSON.stringify(redirect));
    } else {
        if (localStorage.getItem('move')) {
            total_prod = JSON.parse(localStorage.getItem('move'))[1];
            if (localStorage.getItem('id')) {
                var move_id = JSON.parse(localStorage.getItem('id'))
            }
        }
        redirect.push(total_prod);
        localStorage.setItem('move', JSON.stringify(redirect));
    }
    var url2 = durl;
    var filter = sData;
    if (filtering) {
        total_prod = 0;
    }
    ajaxPromise(url2, 'POST', 'JSON', { 'filter': filter, 'total_prod': total_prod, 'items_page': items_page })
        .then(function(shop) {
            console.log(shop);
            $("#containerShop").empty();
            for (row in shop) {
                $('<div></div>').appendTo('#containerShop')
                    .html(
                        '<div id="overlay">' +
                        '<div class= "cv-spinner" >' +
                        '<span class="spinner"></span>' +
                        '</div >' +
                        '</div > ' +
                        '</div>' +
                        '</div>' +
                        '<div class="page">' +
                        '<section class="section section-md bg-white">' +
                        '<div class="shell">' +
                        '<div class="range range-50 range-sm-center range-md-left range-md-middle range-md-reverse">' +
                        '<div class="cell-sm-6 wow fadeInRightSmall">' +
                        ' <div class="thumb-line"><img src="' + shop[row].img + '" alt="" width="531" height="640"/>' +
                        '</div>' +
                        '</div>' +
                        '<div class="cell-sm-6">' +
                        '<div class="box-width-3">' +
                        '<p class="like" id="' + shop[row].id + '"><i id="like" class="like_white fa-heart fa-2x"></i></p>' +
                        '<p class="heading-1 wow fadeInLeftSmall">' + shop[row].brand_name + '</p>' +
                        '<article class="quote-big wow fadeInLeftSmall" data-wow-delay=".1s">' +
                        '<p class="q">' + shop[row].modelo + '</p>' +
                        '<p class="q">' + shop[row].precio + '€</p>' +
                        '<p class="q">' + shop[row].cat_name + '</p>' +
                        '</article>' +
                        '<div class="divider wow fadeInLeftSmall" data-wow-delay=".2s"></div>' +
                        '<p class="q">' + shop[row].type_name + '<i class="fa-thin fa-gas-pump fa-2xl"></i></p>' +
                        '<p class="wow fadeInLeftSmall" data-wow-delay=".3s">' + shop[row].puertas + '<i class="fa-solid fa-door-open fa-2xl"></i></p>' +
                        '<a class="button button-primary-outline button-ujarak button-size-1 wow fadeInLeftSmall link button_spinner" data-wow-delay=".4s" id="' + shop[row].id + '">Read More</a>' +
                        '</div>' +
                        '</div>' +
                        '</section>' +
                        '</div>');
            }
            if (localStorage.getItem('id')) {
                document.getElementById(move_id).scrollIntoView();
            }
            // load_likes();
            mapBox_all(shop);
        }).catch(function(error) {
            console.log(error)
            $("#containerShop").empty();
            $('<div></div>').appendTo('#containerShop')
                .html('<h1>No hay coches con estos filtros</h1>');
        });
}

function shopAll() {
    if (localStorage.getItem('details')) {
        let id = localStorage.getItem('details');
        details(id);
        localStorage.removeItem('details');
    } else {
        let filters_search = JSON.parse(localStorage.getItem('filters_search'));
        let filtros = JSON.parse(localStorage.getItem('filters'));
        let filtro = localStorage.getItem('filter');
        if (filtros != undefined) {
            load_salto();
        } else if (filters_search != undefined) {
            load_search();
        } else if (filtro != undefined) {
            ajaxForSearch("index.php?page=shop&op=filter", filtro);
        } else {
            ajaxForSearch("index.php?page=shop&op=shopAll");
        }
    }
}

function details(id) {
    $("#pagination").empty();
    $("#containerShop").empty();
    $(document).on('click', '.back_button', function() {
        location.reload();
    });

    ajaxPromise("index.php?page=shop&op=details", 'POST', 'JSON', { 'id': id })
        .then(function(id) {
            $('<div></div>').appendTo('#containerShop')
                .html('<div class="page">' +
                    '<section class="section section-md bg-white">' +
                    '<div class="shell">' +
                    '<div class="range range-50 range-sm-center range-md-left range-md-middle range-md-reverse">' +
                    '<div class="cell-sm-6 wow fadeInRightSmall">' +
                    '<div class="slider">' +
                    '<div class="slider-wrapper theme-default">' +
                    '<div id="slider" class="nivoSlider">' +
                    '</div>' +
                    '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nivoslider/3.2/jquery.nivo.slider.pack.min.js"></script>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="cell-sm-6">' +
                    '<div class="box-width-3">' +
                    '<p class="like" id="' + id[0].id + '"><i id="like" class="like_white fa-heart fa-2x"></i></p>' +
                    '<p class="heading-1 wow fadeInLeftSmall">' + id[0].brand_name + '</p>' +
                    '<article class="quote-big wow fadeInLeftSmall" data-wow-delay=".1s">' +
                    '<p class="q">' + id[0].modelo + '</p>' +
                    '<p class="q">' + id[0].precio + '€</p>' +
                    '<p class="q">' + id[0].type_name + '</p>' +
                    '</article>' +
                    '<div class="divider wow fadeInLeftSmall" data-wow-delay=".2s"></div>' +
                    '<p class="wow fadeInLeftSmall" data-wow-delay=".3s">' + id[0].puertas + '<i class="fa-solid fa-door-open fa-2xl"></i></p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</section>' +
                    '</div>' +
                    '<div id="moreCars">' +
                    '<h1>Mas coches ' + id[0].cat_name + '</h1>' +
                    '</div>' +
                    '<div class="botoncito">' +
                    '<a class="button button-primary-outline button-ujarak button-size-1 wow fadeInLeftSmall" data-wow-delay=".4s" id="more_cars">Show More Cars</a>' +
                    '</div>');

            for (row in id) {
                $('<img src = "' + id[row].img + '"></img>').attr({ 'id': id[row].id })
                    .appendTo('#slider')
            }
            $('#slider').nivoSlider({
                slices: 35,
                animSpeed: 100,
            });
            if (localStorage.getItem('details')) {
                localStorage.removeItem('details')
            } else {
                localStorage.setItem('details', id[0].id);
            }
            load_likes_details(id[0]);
            mapBox(id[0]);
        }).catch(function(error) {});
    var move = 0;
    var count = 0;
    $(document).on('click', '#more_cars', function() {
        if (count == 0) {
            moreCars(id, move)
            count++;
        } else {
            move = move + 3;
            moreCars(id, move)
        }
    })
}
//
function moreCars(id, move = 0) {
    var xpage = 3;
    ajaxPromise('modules/shop/crtl/crtl_shop.php?op=moreCars', 'POST', 'JSON', { 'id': id, 'move': move, 'xpage': xpage })
        .then(function(data) {
            for (row in data) {
                $('<div></div>').appendTo('#moreCars')
                    .html(
                        '<div id="overlay">' +
                        '<div class= "cv-spinner" >' +
                        '<span class="spinner"></span>' +
                        '</div >' +
                        '</div > ' +
                        '</div>' +
                        '</div>' +
                        '<div class="page">' +
                        '<section class="section section-md bg-white">' +
                        '<div class="shell">' +
                        '<div class="range range-50 range-sm-center range-md-left range-md-middle range-md-reverse">' +
                        '<div class="cell-sm-6 wow fadeInRightSmall">' +
                        ' <div class="thumb-line"><img src="' + data[row].img + '" alt="" width="531" height="640"/>' +
                        '</div>' +
                        '</div>' +
                        '<div class="cell-sm-6">' +
                        '<div class="box-width-3">' +
                        '<p class="heading-1 wow fadeInLeftSmall">' + data[row].brand_name + '</p>' +
                        '<article class="quote-big wow fadeInLeftSmall" data-wow-delay=".1s">' +
                        '<p class="q">' + data[row].modelo + '</p>' +
                        '<p class="q">' + data[row].precio + '€</p>' +
                        '<p class="q">' + data[row].cat_name + '</p>' +
                        '</article>' +
                        '<div class="divider wow fadeInLeftSmall" data-wow-delay=".2s"></div>' +
                        '<p class="q">' + data[row].type_name + '<i class="fa-thin fa-gas-pump fa-2xl"></i></p>' +
                        '<p class="wow fadeInLeftSmall" data-wow-delay=".3s">' + data[row].puertas + '<i class="fa-solid fa-door-open fa-2xl"></i></p>' +
                        '<p class="like" id="' + data[row].id + '"><i id="like" class="like_white fa-heart fa-2x"></i></p>' +
                        '<a class="button button-primary-outline button-ujarak button-size-1 wow fadeInLeftSmall link button_spinner" data-wow-delay=".4s" id="' + data[row].id + '">Read More</a>' +
                        '</div>' +
                        '</div>' +
                        '</section>' +
                        '</div>');
            }
            load_likes();
        }).catch(function() {
            $('.botoncito').empty();
            $('<h1>No hay más coches</h1>').appendTo('#moreCars')
        });
}
//
function visitas(id) {
    ajaxPromise('index.php?page=shop&op=visitas', 'POST', 'JSON', { id })
        .then(function(id) {}).catch(function() {});
}

function highlight(filter) {
    if (filter != 0) {
        $('.highlight').empty();
        $('<div style="display: inline; float: right;"></div>').appendTo('.highlight')
            .html('<p style="display: inline; margin:10px;">Sus filtros: </p>');
        for (row in filter) {
            $('<div style="display: inline; float: right;"></div>').appendTo('.highlight')
                .html('<p style="display: inline; margin:3px;">' + filter[row] + '</p>');
        }
    } else {
        $('.highlight').empty();
        location.reload();
    }
}

function print_filters() {
    $('<div class="div-filters"></div>').appendTo('.filters')
        .html('<select class="filter_type">' +
            '<option value="1">Electrico</option>' +
            '<option value="2">Hibrido</option>' +
            '<option value="3">Adaptado</option>' +
            '<option value="4">Gasolina</option>' +
            '</select>' +
            '<select class="filter_category">' +
            '<option value="1">KM0</option>' +
            '<option value="2">Seminuevo</option>' +
            '<option value="3">PocosKM</option>' +
            '</select>' +
            '<select class="filter_order">' +
            '<option value="precio">Precio de mas a menos </option>' +
            '<option value="km">KM de menos a mas </option>' +
            '</select>' +
            '<div id="overlay">' +
            '<div class= "cv-spinner" >' +
            '<span class="spinner"></span>' +
            '</div >' +
            '</div > ' +
            '</div>' +
            '</div>' +
            '<p> </p>' +
            '<button class="filter_button button_spinner" id="Button_filter">Filter</button>' +
            '<button class="filter_remove" id="Remove_filter">Remove</button>');
}
//
function filter_button() {
    $(function() {
        $('.filter_type').change(function() {
            localStorage.setItem('filter_type', this.value);
        });
        if (localStorage.getItem('filter_type')) {
            $('.filter_type').val(localStorage.getItem('filter_type'));
        }
    });
    $(function() {
        $('.filter_category').change(function() {
            localStorage.setItem('filter_category', this.value);
        });
        if (localStorage.getItem('filter_category')) {
            $('.filter_category').val(localStorage.getItem('filter_category'));
        }
    });
    $(function() {
        $('.filter_order').change(function() {
            localStorage.setItem('filter_order', this.value);
        });
        if (localStorage.getItem('filter_order')) {
            $('.filter_order').val(localStorage.getItem('filter_order'));
        }
    });
    $(document).on('click', '.filter_button', function() {
        var filter = [];

        localStorage.removeItem('filters');
        localStorage.removeItem('filters_search');

        if (localStorage.getItem('filter_type')) {
            filter.push(['combustible', localStorage.getItem('filter_type')])
        }
        if (localStorage.getItem('filter_category')) {
            filter.push(['categoria', localStorage.getItem('filter_category')])
        }
        if (localStorage.getItem('filter_order')) {
            filter.push(['orden', localStorage.getItem('filter_order')])
        }
        if (filter) {
            localStorage.removeItem('move');
            ajaxForSearch("index.php?page=shop&op=filter", filter, 0, 3, true);
            pagination(filter);
        } else {
            ajaxForSearch("index.php?page=shop&op=shopAll");
        }
        highlight(filter);
    });
    $(document).on('click', '.filter_remove', function() {
        location.reload();
        localStorage.removeItem('filter_type');
        localStorage.removeItem('filter_category');
        localStorage.removeItem('filter_order');
        localStorage.removeItem('filters');
        localStorage.removeItem('filters_search');
        filter.length = 0;
        if (filter == 0) {
            ajaxForSearch("index.php?page=shop&op=shopAll");
            highlight(filter);
        }
    });
}
//
function load_details() {
    $(document).on('click', '.link', function() {
        var id = this.getAttribute('id');
        details(id);
        visitas(id);
    })
}

function mapBox_all(shop) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiMjBqdWFuMTUiLCJhIjoiY2t6eWhubW90MDBnYTNlbzdhdTRtb3BkbyJ9.uR4BNyaxVosPVFt8ePxW1g';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-0.61667, 38.83966492354664], // starting position [lng, lat]
        zoom: 6 // starting zoom
    });

    for (row in shop) {
        const marker = new mapboxgl.Marker()
        const minPopup = new mapboxgl.Popup()
        minPopup.setHTML('<h3 style="text-align:center;">' + shop[row].brand_name + '</h3><p style="text-align:center;">Modelo: <b>' + shop[row].modelo + '</b></p>' +
            '<p style="text-align:center;">Precio: <b>' + shop[row].precio + '€</b></p>' +
            '<img src=" ' + shop[row].img + '"/>' +
            '<a class="button button-primary-outline button-ujarak button-size-1 wow fadeInLeftSmall link" data-wow-delay=".4s" id="' + shop[row].id + '">Read More</a>')
        marker.setPopup(minPopup)
            .setLngLat([shop[row].longi, shop[row].lat])
            .addTo(map);
    }
}

function mapBox(id) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiMjBqdWFuMTUiLCJhIjoiY2t6eWhubW90MDBnYTNlbzdhdTRtb3BkbyJ9.uR4BNyaxVosPVFt8ePxW1g';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [id.longi, id.lat], // starting position [lng, lat]
        zoom: 10 // starting zoom
    });
    const markerOntinyent = new mapboxgl.Marker()
    const minPopup = new mapboxgl.Popup()
    minPopup.setHTML('<h4>' + id.brand_name + '</h4><p>Modelo: ' + id.modelo + '</p>' +
        '<p>Precio: ' + id.precio + '€</p>' +
        '<img src=" ' + id.img + '"/>')
    markerOntinyent.setPopup(minPopup)
        .setLngLat([id.longi, id.lat])
        .addTo(map);
}

function load_salto(total_prod = 0, items_page = 3) {
    var filtros = JSON.parse(localStorage.getItem('filters'));
    ajaxPromise('modules/shop/crtl/crtl_shop.php?op=redirect', 'POST', 'JSON', { 'filtros': filtros, 'total_prod': total_prod, 'items_page': items_page })
        .then(function(shop) {
            $("#containerShop").empty();
            for (row in shop) {
                $('<div></div>').appendTo('#containerShop')
                    .html(
                        '<div id="overlay">' +
                        '<div class= "cv-spinner" >' +
                        '<span class="spinner"></span>' +
                        '</div >' +
                        '</div > ' +
                        '</div>' +
                        '</div>' +
                        '<div class="page">' +
                        '<section class="section section-md bg-white">' +
                        '<div class="shell">' +
                        '<div class="range range-50 range-sm-center range-md-left range-md-middle range-md-reverse">' +
                        '<div class="cell-sm-6 wow fadeInRightSmall">' +
                        ' <div class="thumb-line"><img src="' + shop[row].img + '" alt="" width="531" height="640"/>' +
                        '</div>' +
                        '</div>' +
                        '<div class="cell-sm-6">' +
                        '<div class="box-width-3">' +
                        '<p class="heading-1 wow fadeInLeftSmall">' + shop[row].brand_name + '</p>' +
                        '<article class="quote-big wow fadeInLeftSmall" data-wow-delay=".1s">' +
                        '<p class="q">' + shop[row].modelo + '</p>' +
                        '<p class="q">' + shop[row].precio + '€</p>' +
                        '<p class="q">' + shop[row].cat_name + '</p>' +
                        '</article>' +
                        '<div class="divider wow fadeInLeftSmall" data-wow-delay=".2s"></div>' +
                        '<p class="q">' + shop[row].type_name + '<i class="fa-thin fa-gas-pump fa-2xl"></i></p>' +
                        '<p class="wow fadeInLeftSmall" data-wow-delay=".3s">' + shop[row].puertas + '<i class="fa-solid fa-door-open fa-2xl"></i></p><a class="button button-primary-outline button-ujarak button-size-1 wow fadeInLeftSmall link button_spinner" data-wow-delay=".4s" id="' + shop[row].id + '">Read More</a>' +
                        '</div>' +
                        '</div>' +
                        '</section>' +
                        '</div>');
            }
            mapBox_all(shop);
        }).catch(function() {
            window.location.href = "index.php?modules=exception&op=503&error=fail_salto&type=503";
        });
}
//
function load_search(total_prod = 0, items_page = 3) {
    var filters_search = JSON.parse(localStorage.getItem('filters_search'));
    ajaxPromise('index.php?page=shop&op=filters_search', 'POST', 'JSON', { 'filters_search': filters_search, 'total_prod': total_prod, 'items_page': items_page })
        .then(function(shop) {
            $("#containerShop").empty();
            for (row in shop) {
                $('<div></div>').appendTo('#containerShop')
                    .html(
                        '<div id="overlay">' +
                        '<div class= "cv-spinner" >' +
                        '<span class="spinner"></span>' +
                        '</div >' +
                        '</div > ' +
                        '</div>' +
                        '</div>' +
                        '<div class="page">' +
                        '<section class="section section-md bg-white">' +
                        '<div class="shell">' +
                        '<div class="range range-50 range-sm-center range-md-left range-md-middle range-md-reverse">' +
                        '<div class="cell-sm-6 wow fadeInRightSmall">' +
                        ' <div class="thumb-line"><img src="' + shop[row].img + '" alt="" width="531" height="640"/>' +
                        '</div>' +
                        '</div>' +
                        '<div class="cell-sm-6">' +
                        '<div class="box-width-3">' +
                        '<p class="heading-1 wow fadeInLeftSmall">' + shop[row].brand_name + '</p>' +
                        '<article class="quote-big wow fadeInLeftSmall" data-wow-delay=".1s">' +
                        '<p class="q">' + shop[row].modelo + '</p>' +
                        '<p class="q">' + shop[row].precio + '€</p>' +
                        '<p class="q">' + shop[row].cat_name + '</p>' +
                        '</article>' +
                        '<div class="divider wow fadeInLeftSmall" data-wow-delay=".2s"></div>' +
                        '<p class="q">' + shop[row].type_name + '<i class="fa-thin fa-gas-pump fa-2xl"></i></p>' +
                        '<p class="wow fadeInLeftSmall" data-wow-delay=".3s">' + shop[row].puertas + '<i class="fa-solid fa-door-open fa-2xl"></i></p><a class="button button-primary-outline button-ujarak button-size-1 wow fadeInLeftSmall link button_spinner" data-wow-delay=".4s" id="' + shop[row].id + '">Read More</a>' +
                        '</div>' +
                        '</div>' +
                        '</section>' +
                        '</div>');
            }
            mapBox_all(shop);
        }).catch(function() {
            $("#containerShop").empty();
            $('<div></div>').appendTo('#containerShop')
                .html('<h1>No hay coches con estos filtros</h1>');
        });
}

function pagination(filter) {

    var filters_search = JSON.parse(localStorage.getItem('filters_search'));
    var filtros = JSON.parse(localStorage.getItem('filters'));
    var filter = filter
    if (filters_search) {
        var url = "index.php?page=shop&op=count_search";
    } else if (filtros) {
        var url = "modules/shop/crtl/crtl_shop.php?op=count_home";
    } else if (filter != undefined) {
        var url = "index.php?page=shop&op=count_filter";
    } else {
        var url = "index.php?page=shop&op=count";
    }
    ajaxPromise(url, 'POST', 'JSON', { 'filter': filter, 'filtros': filtros, 'filters_search': filters_search })
        .then(function(data) {
            console.log(data)
            var total_pages = 0;
            var total_prod = data[0].contador;
            if (total_prod >= 3) {
                total_pages = Math.ceil(total_prod / 3)
            } else {
                total_pages = 1;
            }
            $('#pagination').bootpag({
                total: total_pages,
                page: localStorage.getItem('move') ? JSON.parse(localStorage.getItem('move'))[1] / 3 + 1 : 1,
                maxVisible: total_pages
            }).on('page', function(event, num) {
                total_prod = 3 * (num - 1);
                let redirect = [];
                redirect.push("index.php?page=shop&op=view");
                redirect.push(total_prod);
                localStorage.setItem('move', JSON.stringify(redirect));
                localStorage.removeItem('id');
                if (filters_search) {
                    load_search(total_prod, 3);
                } else if (filter != undefined) {
                    ajaxForSearch("index.php?page=shop&op=filter", filter, total_prod, 3);
                } else {
                    ajaxForSearch("index.php?page=shop&op=shopAll", undefined, total_prod, 3);
                }
                $('html, body').animate({ scrollTop: $(".wrap") });
            });

        })
}

function load_likes() {
    var token = localStorage.getItem('token');
    if (token) {
        ajaxPromise('modules/shop/crtl/crtl_shop.php?op=load_likes', 'POST', 'JSON', { 'token': token })
            .then(function(data) {
                for (row in data) {
                    if ($("#" + data[row].car_id).children("i").hasClass("like_white")) {
                        $("#" + data[row].car_id).children("i").removeClass("like_white").addClass("like_red");
                    }
                }
            })
    }
}

function load_likes_details(id) {
    var token = localStorage.getItem('token');
    var id = id.id;
    if (token) {
        ajaxPromise('modules/shop/crtl/crtl_shop.php?op=load_likes_details', 'POST', 'JSON', { 'token': token, 'id': id })
            .then(function(data) {
                if (id == data.car_id) {
                    $("#" + data.car_id).children("i").removeClass("like_white").addClass("like_red");
                    $(".like").empty();
                    $('<i id="like" class="like_red fa-heart fa-2x"></i>').appendTo('.like')
                } else {}
            })
    }
}

function click_likes() {
    $(document).on('click', '.like', function() {
        let redirect = [];
        var token = localStorage.getItem('token')
        var id = this.getAttribute('id');
        redirect.push(id);
        localStorage.setItem('id', JSON.stringify(redirect));
        if (token) {
            ajaxPromise("modules/shop/crtl/crtl_shop.php?op=control_likes", 'POST', 'JSON', { 'token': token, 'id': id })
            if ($(this).children("i").hasClass("like_white")) {
                $(this).children("i").removeClass("like_white").addClass("like_red");
            } else {
                $(this).children("i").removeClass("like_red").addClass("like_white");
            }
        } else {
            if (localStorage.getItem('details')) {
                toastr['warning']("Necesitas loguearte para dar like");
                setTimeout(' window.location.href = "index.php?modules=login&op=login"; ', 2000);
            } else {
                toastr['warning']("Necesitas loguearte para dar like");
                setTimeout(' window.location.href = "index.php?modules=login&op=login"; ', 2000);
            }
        }
    });
}
$(document).ready(function() {
    shopAll();
    load_details();
    print_filters();
    filter_button();
    pagination();
    // click_likes();
});