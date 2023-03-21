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

// Execute the SQL query to retrieve the data
$sql = "SELECT * FROM form_data";
$result = $conn->query($sql);

// Display the data in an HTML table
if ($result->num_rows > 0) {
    echo "<table><tr><th>Main Passenger Name</th><th>NIC No.</th><th>Telephone Number</th><th>From</th><th>To</th><th>Departure Date</th><th>Return Date</th><th>Number of Passengers</th><th>Driver</th><th>Travel Guide's Language</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["main_passenger_name"] . "</td><td>" . $row["nic_no"] . "</td><td>" . $row["telephone_number"] . "</td><td>" . $row["from_location"] . "</td><td>" . $row["to_location"] . "</td><td>" . $row["departure_date"] . "</td><td>" . $row["return_date"] . "</td><td>" . $row["num_passengers"] . "</td><td>" . $row["driver"] . "</td><td>" . $row["travel_guide_language"] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "No results found.";
}

// Close the database connection
$conn->close();
?>
