<?php
phpinfo();

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "guvi";

//Create a mysql conn
$conn = new mysqli($servername,$username,$password,$dbname);

if ($conn->connect_error) {
    die("Connection Failed : " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES(? , ?)");
    $stmt->bind_param("ss",$username, $password);

    if($stmt->execute()) {
        echo "Registration successful in mysql db";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();

    echo "Registration successful!";
}

//connection close 
$conn->close();
?>