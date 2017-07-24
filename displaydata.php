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

$sql = "SELECT id, Name, Gender,Salary FROM tblemployees";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    echo "<table border='3'>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>$row[id]</td><td>$row[Name]</td><td>$row[Gender]</td><td>$row[Salary]</td></tr>";
        echo  $row["id"];
        echo  $row["Name"];
        echo  $row["Gender"];
         echo  $row["Salary"];
        }
        echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
?>