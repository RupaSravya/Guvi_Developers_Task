function loginUser() {
    var username = $('#username').val();
    var password = $('#password').val();

    // Use jQuery AJAX to send login data to the server
    $.ajax({
        type: 'POST',
        url: 'php/login.php',
        data: { username: username, password: password },
        success: function(response) {
            if(response === "success"){
                console.log("Ankit is there")
                window.location.href = 'profile.html';
            }
            else {
                alert(response);
            }
            // Redirect to profile page after successful login
            //window.location.href = 'profile.html';
        }
    });
}