<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost"; // replace with your database server name
$username = "root"; // replace with your database username
$password = ""; // replace with your database password
$dbname = "insert"; // replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['user_name']) && isset($_POST['user_email'])) {
        // Insert
        $user_name = $_POST['user_name'];
        $user_email = $_POST['user_email'];
        $sql = "INSERT INTO users (name, email) VALUES ('$user_name', '$user_email')";
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } elseif (isset($_POST['action'])) {
        $action = $_POST['action'];
        if ($action == 'delete' && isset($_POST['delete_email'])) {
            // Delete
            $delete_email = $_POST['delete_email'];
            $sql = "DELETE FROM users WHERE email='$delete_email'";
            if ($conn->query($sql) === TRUE) {
                echo "Record deleted successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } elseif ($action == 'update' && isset($_POST['new_user_name']) && isset($_POST['new_user_email']) && isset($_POST['old_user_email'])) {
            // Update
            $new_user_name = $_POST['new_user_name'];
            $new_user_email = $_POST['new_user_email'];
            $old_user_email = $_POST['old_user_email'];
            $sql = "UPDATE users SET name='$new_user_name', email='$new_user_email' WHERE email='$old_user_email'";
            if ($conn->query($sql) === TRUE) {
                echo "Record updated successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } elseif ($action == 'search' && isset($_POST['search_email'])) {
            // Search
            $search_email = $_POST['search_email'];
            $sql = "SELECT * FROM users WHERE email='$search_email'";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
                }
            } else {
                echo "0 results";
            }
        }
    }
}

$conn->close();
?>
