<?php
session_start();
//$redis = new Redis();
//$redis->connect('127.0.0.1',6379);

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
    $password = $_POST['password'];

    // Validate user credentials and create a session (not implemented in this example)
    $sql = "SELECT * FROM users where username = '$username'";
    $result = $conn->query($sql);

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        //Verify Password 
        if(password_verify($password,$row["password"])) {

            $userName = $row["username"];
            $userId = $row["id"];

           $redis.setex("user:$userId",600,json_encode($userData));

            echo "success";
            exit();

        } else {
            echo "Invalid Password";
        }
    }
    else {
        echo "User Not Found";
    }
    //echo "Login successful!";
}

$conn->close();
?>
