<!DOCTYPE html> 
<html lang="en"> 
 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>RT-PHP</title> 
</head> 
 
<body> 
     
    <?php 
    $con = mysqli_connect('localhost', 'root', ''); 
    if(!$con) { 
        echo 'Not connected to the server'; 
    } 
    if(!mysqli_select_db($con, 'insert')){ 
        echo 'Database is  not selected'; 
    } 
    $name = $_POST['user_name']; 
    $email = $_POST['user_email']; 
    $sql = "INSERT INTO user (user_name, user_email) VALUES ('$name', '$email')"; 
    if (!mysqli_query($con, $sql)) { 
        echo 'Not inserted or not save'; 
    } 
    else{                                                                                                               
        echo 'Inserted or save'; 
    } 
    
    ?> 
 
</body> 
 
</html>