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

// Execute the SQL query to insert the new data into the database
$sql = "INSERT INTO form_data (main_passenger_name, nic_no, telephone_number, from_location, to_location, departure_date, return_date, num_passengers, driver, travel_guide_language) VALUES ('$main_passenger_name', '$nic_no', '$telephone_number', '$from_location', '$to_location', '$departure_date', '$return_date', '$num_passengers', '$driver', '$travel_guide_language')";
if ($conn->query($sql) === TRUE) {
    echo "Record created successfully.";
} else {
    echo "Error creating record: " . $conn->error;
}

// Close the database connection
$conn->close();
?>
