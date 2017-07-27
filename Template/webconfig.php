<?php
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
    // output data of each row
   echo "<table border='3'>";
    while($row = $result->fetch_array()) {
       echo "<tr><td>$row[Id]</td><td>$row[Name]</td><td>$row[Gender]</td><td>$row[Location]</td></tr>";
    //    echo  $row[Id];
    //     echo  $row[Name];
	// 	 echo $row[Gender];
    //    echo  $row[Location];
         
        }
       echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
?>