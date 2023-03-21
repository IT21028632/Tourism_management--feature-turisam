<?php

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	// Retrieve form data
	$name = $_POST['name'];
	$nic = $_POST['nic'];
	$phone = $_POST['phone'];
	$from = $_POST['from'];
	$to = $_POST['to'];
	$departureDate = $_POST['departure-date'];
	$returnDate = $_POST['return-date'];
	$passengerCount = $_POST['passenger-count'];
	$driver = $_POST['driver'];
	$language = $_POST['language'];

	// Validate form data
	if (!preg_match('/^[a-zA-Z ]*$/', $name)) {
		echo 'Invalid name';
	} elseif (!preg_match('/^[0-9]{9}[vVxX]$/', $nic)) {
		echo 'Invalid NIC number';
	} elseif (!preg_match('/^[0-9]{10}$/', $phone)) {
		echo 'Invalid phone number';
	} else {
		// Form data is valid, process it as desired (e.g. save to database or send in email)
		// ...
		
		// Redirect to a thank you page
		header('Location: thankyou.php');
		exit;
	}
}

?>
