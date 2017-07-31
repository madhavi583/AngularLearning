<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "angular";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$sel = mysqli_query($conn,"SELECT * FROM users ");
$data = array();
while ($row = mysqli_fetch_array($sel)) {
    $data[] = array("id"=>$row['id'],"fname"=>$row['fname'],"lname"=>$row['lname'],"username"=>$row['username']);
}

echo json_encode($data);
?>