<?php
echo "hai";
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "angular";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM tblstudents";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
       
       // echo "$row[Name]";
//        $json_arry = json_encode($row);
// echo $json_array;
$rows[] = $row;
        }
      echo json_encode($rows);
} else {
    echo "0 results";
}
$conn->close();
?>
