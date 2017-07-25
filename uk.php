


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

$sql = "SELECT tblcountry.Id, tblcity.Name, tblcountry.Name
FROM tblcountry INNER JOIN tblcity
ON tblcountry.Id=tblcity.CountryId;";
$sql1 = "SELECT tblcity.Name,tblcountry.Name, tblcountry.Name, tblcity.Name FROM tblcity , tblcountry WHERE tblcity.CountryId =tblcountry.Id AND tblcountry.Name='UK'";
$result = $conn->query($sql1);

if ($result->num_rows > 0) {
    // output data of each row
    echo "<table border='3'>";
    while($row = $result->fetch_assoc()) {
       echo "<tr><td>$row[Name]</td><td>$row[Name]</td></tr>";
        //echo  $row["Id"];
        //echo  $row["Name"];
       // echo  $row["CountryId"];
         
        }
        echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
?>