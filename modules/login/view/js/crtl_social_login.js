function button_log_google() {
    $('#log_google').on('click', function(e) {
        var authService = firebase.auth();
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        authService.signInWithPopup(provider)
            .then(function(data) {
                login_social_singin(data);
            })
    });
}

function button_log_github() {
    $('#log_github').on('click', function(e) {
        var authService = firebase.auth();
        var provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('email');
        authService.signInWithPopup(provider)
            .then(function(data) {
                login_social_singin(data);
            })
    });
}

function login_social_singin(user_data) {
    const username = user_data.user.displayName;
    const email = user_data.user.email
    const profile = user_data.user.photoURL
    const user_id = user_data.user.uid
    const provider = user_data.credential.providerId;
    const user = { 'username': username, 'email': email, 'profile': profile, 'user_id': user_id, "provider": provider };
    console.log(user);
    ajaxPromise('?page=login&op=social_singin', 'POST', 'JSON', { 'username': username, 'email': email, 'user_id': user_id, })
        .then(function(data) {
            localStorage.setItem('token', data);
            if (localStorage.getItem('details')) {
                toastr['success']("Volviendo a los detalles del coche");
                setTimeout(' window.location.href = "index.php?page=shop&op=view"; ', 2000);
            } else if (localStorage.getItem('move')) {
                var move = JSON.parse(localStorage.getItem('move'));
                toastr['success']("Volviendo a las compras");
                setTimeout(' window.location.href = "' + move[0] + '"; ', 2000);
            } else {
                toastr["success"]("Logueado con exito");
                setTimeout(' window.location.href = "index.php?page=home&op=view"; ', 2000);
            }
        })
}

$(document).ready(function() {
    button_log_google();
    button_log_github();


    var config = {
        apiKey: "AIzaSyDvLROZ3sRHvAR4kU7wnjiP_kxCB7VNPVY",
        authDomain: "prueba-social-346513.firebaseapp.com",
        projectId: "prueba-social-346513",
        storageBucket: "",
        messagingSenderId: "1083042191876"
    };

    firebase.initializeApp(config);
});