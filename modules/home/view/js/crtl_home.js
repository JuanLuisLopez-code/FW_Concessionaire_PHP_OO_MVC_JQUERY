function loadSlider() {
    ajaxPromise('index.php?page=home&op=carousel', 'GET', 'JSON')
        .then(function(brand) {
            count = 0;
            for (row in brand) {
                if (count == 0) {
                    $('<div></div>').attr('class', 'item active spinner').attr('id', brand[row].id_brand).appendTo('.carousel-inner')
                        .html('<img src = "' + brand[row].brand_image + '"></img>')
                    count = 1;
                } else {
                    $('<div></div>').attr('class', 'item spinner').attr('id', brand[row].id_brand).appendTo('.carousel-inner')
                        .html('<img src = "' + brand[row].brand_image + '"></img>')
                }
            }
            // // click();
        }).catch(function(error) {
            console.log(error)
                // window.location.href = "index.php?modules=exception&op=503&error=fail_Slider&type=503";
        });
}

function loadCatCategory() {
    ajaxPromise('index.php?page=home&op=categoria', 'POST', 'JSON')
        .then(function(categoria) {
            for (row in categoria) {
                $('<div></div>').appendTo('#containerCategories')
                    .html('<div class="grid_1_of_4 images_1_of_4">' +
                        '<h3>' + categoria[row].cat_name + '</h3>' +
                        '<a class="estado" id="' + categoria[row].cat_name + '"><img src="' + categoria[row].cat_image + '" alt=""></img></a>' +
                        '<p>En este apartado usted puede comprar coches de categoria ' + categoria[row].cat_name + '</p>' +
                        '<div class="btn">' +
                        '<a class="estado link" id="' + categoria[row].cat_name + '"><span><span>Read More</span></span></a>' +
                        '</div>' +
                        '</div>');
            }
        }).catch(function(error) {
            console.log(error)
                // window.location.href = "index.php?modules=exception&op=503&error=fail_category&type=503";
        });
}

function loadCatType() {
    ajaxPromise('index.php?page=home&op=type', 'POST', 'JSON')
        .then(function(type) {
            for (row in type) {
                $('<div></div>').appendTo('#containerType')
                    .html('<div class="grid images_3_of_1">' +
                        '<a class="type" id="' + type[row].type_name + '"><img src="' + type[row].type_image + '" alt=""></img></a>' +
                        '</div>' +
                        '<div class="grid span_2_of_3">' +
                        '<h3>' + type[row].type_name + '</h3>' +
                        '<p>En este apartado usted puede comprar coches ' + type[row].type_name + '</p>' +
                        '<div class="btn">' +
                        '<a class="type link" id="' + type[row].type_name + '"><span><span>Read More</span></span></a>' +
                        '</div>' +
                        '<br>' +
                        '<br>' +
                        '</div>');
            }
        }).catch(function(error) {
            console.log(error)
                // window.location.href = "index.php?modules=exception&op=503&error=fail_type&type=503";
        });
}

function click() {
    $(document).on("click", '.spinner', function() {
        var filters = [];
        filters.push({ "marca": [this.getAttribute('id')] });
        localStorage.removeItem('filters');
        localStorage.setItem('filters', JSON.stringify(filters));
        window.location.href = 'index.php?modules=shop&op=list';
    })
    $(document).on("click", '.estado', function() {
        var filters = [];
        filters.push({ "categoria": [this.getAttribute('id')] });
        localStorage.removeItem('filters');
        localStorage.setItem('filters', JSON.stringify(filters));
        window.location.href = 'index.php?modules=shop&op=list';
    })
    $(document).on("click", '.type', function() {
        var filters = [];
        filters.push({ "type": [this.getAttribute('id')] });
        localStorage.removeItem('filters');
        localStorage.setItem('filters', JSON.stringify(filters));
        window.location.href = 'index.php?modules=shop&op=list';
    })
}

function loadsuggestions() {
    var limit = 2;
    $(document).on("click", '.cta', function() {
        $('#featured').empty();
        $('#btnfeatured').empty();
        limit = limit + 2;

        ajaxPromise('https://www.googleapis.com/books/v1/volumes?q=car', 'GET', 'JSON')

        .then(function(data) {
            var DatosJson = JSON.parse(JSON.stringify(data));
            DatosJson.items.length = limit;

            for (i = 0; i < DatosJson.items.length; i++) {
                $('<div id="prueba"></div>').appendTo('#featured').html(
                    "<br><div id='cont_img'><img src='" + data['items'][i]['volumeInfo']['imageLinks']['thumbnail'] + "' class='cart' cat='" + data['items'][i]['volumeInfo']['categories'] + "' data-toggle='modal' data-target='#exampleModal'></div><div id='list_header'><span id='li_brand'>  " + DatosJson.items[i].volumeInfo.title + "</br>" + "</span></div>" +
                    '<textarea rows="10">' + data['items'][i]['volumeInfo']['description'] + '</textarea>' +
                    '<br>' +
                    '<br>' +
                    '<br>' +
                    '<a target="_blank" href="' + data['items'][i]['accessInfo']['webReaderLink'] + '" class="cta_search">' +
                    '<span>Show info</span>' +
                    '<svg width="15px" height="10px" viewBox="0 0 13 10">' +
                    '<path d="M1,5 L11,5"></path>' +
                    '<polyline points="8 1 12 5 8 9"></polyline>' +
                    '</svg>' +
                    '</a>');
            }
            $("#btnfeatured").append(
                '<button class="cta">' +
                '<span>Show 2 more</span>' +
                '<svg width="15px" height="10px" viewBox="0 0 13 10">' +
                '<path d="M1,5 L11,5"></path>' +
                '<polyline points="8 1 12 5 8 9"></polyline>' +
                '</svg>' +
                '</button>'
            );
            if (limit === 10) {
                $('#btnfeatured').empty();
                $("#nomore").append(
                    '<div id="loadsugest"><a>NO HAY MAS LIBROS</a></div>'
                );
            }
        });
    })
}

function getSuggestions() {
    limit = 2;
    ajaxPromise('https://www.googleapis.com/books/v1/volumes?q=car', 'GET', 'JSON')

    .then(function(data) {
        var DatosJson = JSON.parse(JSON.stringify(data));
        DatosJson.items.length = limit;

        for (i = 0; i < DatosJson.items.length; i++) {
            $('<div id="prueba"></div>').appendTo('#featured').html(
                "<br><div id='cont_img'><img src='" + data['items'][i]['volumeInfo']['imageLinks']['thumbnail'] + "' class='cart' cat='" + data['items'][i]['volumeInfo']['categories'] + "' data-toggle='modal' data-target='#exampleModal'></div><div id='list_header'><span id='li_brand'>  " + DatosJson.items[i].volumeInfo.title + "</br>" + "</span></div>" +
                '<textarea rows="10">' + data['items'][i]['volumeInfo']['description'] + '</textarea>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<a target="_blank" href="' + data['items'][i]['accessInfo']['webReaderLink'] + '" class="cta_search">' +
                '<span>Show info</span>' +
                '<svg width="15px" height="10px" viewBox="0 0 13 10">' +
                '<path d="M1,5 L11,5"></path>' +
                '<polyline points="8 1 12 5 8 9"></polyline>' +
                '</svg>' +
                '</a>');
        }
        $("#featured").append(
            '<br>' +
            '<br>' +
            '<br>' +
            '<button class="cta">' +
            '<span>Show 2 more</span>' +
            '<svg width="15px" height="10px" viewBox="0 0 13 10">' +
            '<path d="M1,5 L11,5"></path>' +
            '<polyline points="8 1 12 5 8 9"></polyline>' +
            '</svg>' +
            '</button>'
        );
    });
    loadsuggestions();
}

$(document).ready(function() {
    loadSlider();
    loadCatCategory();
    loadCatType();
    // click();
    // getSuggestions();

});