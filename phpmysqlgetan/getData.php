<?php

include 'config.php';
//echo "{{user.id}}";
$sel = mysqli_query($con,"select * from users ");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
    $data[] = array("id"=>$row['id'],"fname"=>$row['fname'],"lname"=>$row['lname'],"username"=>$row['username']);
}

echo json_encode($data);
//INSERT INTO `users`(`id`, `fname`, `lname`, `username`) VALUES ('','madhavi','pathapati','madhavi@583');
//http://localhost/phpmysqlgetan/user/1

