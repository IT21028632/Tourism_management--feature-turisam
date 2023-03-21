<?php
// Establish a connection to the database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the ID of the row to be deleted from the URL parameter
$id = $_GET["id"];

// Execute the SQL query to delete the row with the specified ID
$sql = "DELETE FROM form_data WHERE id = $id";
if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully.";
} else {
    echo "Error deleting record: " . $conn->error;
}

// Close the database connection
$conn->close();
?>
