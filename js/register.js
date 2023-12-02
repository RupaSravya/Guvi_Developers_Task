function registerUser() {
    console.log("Inside Register Js func");
    var username = $('#username').val();
    var password = $('#password').val();

    // Use jQuery AJAX to send registration data to the server
    $.ajax({
        type: 'POST',
        url: 'php/register.php',
        data: { username: username, password: password },
        success: function(response) {
            alert(response);
            // Redirect to login page after successful registration
            window.location.href = 'login.html';
        }
    });
}