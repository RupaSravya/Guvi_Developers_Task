<?php

require 'vendor/autoload.php';

use MongoDB\Client;

$mongoClient = new Client("mongodb://localhost:27017");

// $database = $mongoClient->guvi;

// $collection = $mongoClient->user_profiles;

$database = $mongoClient->selectDatabase('guvi');
$collection = $mongoClient->selectCollection('user_profiles');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $username = $_POST['profileusernameinput'];
    $age = $_POST['profileageinput'];
    $dob = $_POST['profiledobinput'];
    $contact = $_POST['profilecontactinput'];



    $filter = ['username' => $username];
    $update = [
        '$set' => [
            'name' => $username,
             'age' => $age,
             'dob' => $dob,
             'contact' => $contact
        ]
    ];
    
    $options = [
        'returnDocument' => MongoDB\Operation\FindOneAndUpdate::RETURN_DOCUMENT_AFTER,
    ];
    
    $result = $collection->findOneAndUpdate($filter, $update, $options);
    
    if ($result) {
        echo "Profile updated successfully";
    } else {
        echo "Failed to update profile";
    }
}


//to fetch the profile details
//use get

if($_SERVER['REQUEST_METHOD'] === 'GET') {

    $username = $_GET['usernameLoggedin'];

$filter = ['username' => $username];

$userProfile = $collection->findOne($filter);

if ($userProfile) {
    return $userProfile;
} else {
    // User profile not found
    echo "User not found";
    
}
}

?>