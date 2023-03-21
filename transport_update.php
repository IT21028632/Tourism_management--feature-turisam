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

// Retrieve the form data and sanitize inputs
$id = mysqli_real_escape_string($conn, $_POST["id"]);
$main_passenger_name = mysqli_real_escape_string($conn, $_POST["main_passenger_name"]);
$nic_no = mysqli_real_escape_string($conn, $_POST["nic_no"]);
$telephone_number = mysqli_real_escape_string($conn, $_POST["telephone_number"]);
$from_location = mysqli_real_escape_string($conn, $_POST["from_location"]);
$to_location = mysqli_real_escape_string($conn, $_POST["to_location"]);
$departure_date = mysqli_real_escape_string($conn, $_POST["departure_date"]);
$return_date = mysqli_real_escape_string($conn, $_POST["return_date"]);
$num_passengers = mysqli_real_escape_string($conn, $_POST["num_passengers"]);
$driver = mysqli_real_escape_string($conn, $_POST["driver"]);
$travel_guide_language = mysqli_real_escape_string($conn, $_POST["travel_guide_language"]);

// Execute the SQL query to update the data in the database
$sql = "UPDATE form_data SET main_passenger_name='$main_passenger_name', nic_no='$nic_no', telephone_number='$telephone_number', from_location='$from_location', to_location='$to_location', departure_date='$departure_date', return_date='$return_date', num_passengers='$num_passengers', driver='$driver', travel_guide_language='$travel_guide_language' WHERE id='$id'";
if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully.";
} else {
    echo "Error updating record: " . $conn->error;
}

// Close the database connection
$conn->close();
?>
