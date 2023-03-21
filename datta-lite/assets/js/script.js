JavaScript:
// Load the table data when the page is loaded
document.addEventListener('DOMContentLoaded', loadTableData);

// Submit the form data and add it to the table
function submitForm() {
// Get the form data
const formData = getFormData();

// Add the form data to the table
addTableRow(formData);

// Clear the form
clearForm();
}

// Get the form data and return an object
function getFormData() {
    const mainPassengerName = document.getElementById('main_passenger_name').value;
    const nicNo = document.getElementById('nic_no').value;
    const telephoneNumber = document.getElementById('telephone_number').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departureDate = document.getElementById('departure_date').value;
    const returnDate = document.getElementById('return_date').value;
    const numPassengers = document.getElementById('num_passengers').value;
    const driver = document.getElementById('driver').value;
    const travelGuideLanguage = document.getElementById('travel_guide_language').value;
    const termsAndConditions = document.getElementById('terms_and_conditions').checked;
    return {
        mainPassengerName,
        nicNo,
        telephoneNumber,
        from,
        to,
        departureDate,
        returnDate,
        numPassengers,
        driver,
        travelGuideLanguage,
        termsAndConditions
    };
}
// Add a new row to the table
function addTableRow(formData) {
    // Get the table body element
    const tableBody = document.querySelector('#table tbody');
    // Create a new table row element
const tableRow = document.createElement('tr');

// Create a table data element for each form field and add it to the table row
const mainPassengerNameCell
= document.createElement('td');
mainPassengerNameCell.textContent = formData.mainPassengerName;
tableRow.appendChild(mainPassengerNameCell);

const nicNoCell = document.createElement('td');
nicNoCell.textContent = formData.nicNo;
tableRow.appendChild(nicNoCell);

const telephoneNumberCell = document.createElement('td');
telephoneNumberCell.textContent = formData.telephoneNumber;
tableRow.appendChild(telephoneNumberCell);

const fromCell = document.createElement('td');
fromCell.textContent = formData.from;
tableRow.appendChild(fromCell);

const toCell = document.createElement('td');
toCell.textContent = formData.to;
tableRow.appendChild(toCell);

const departureDateCell = document.createElement('td');
departureDateCell.textContent = formData.departureDate;
tableRow.appendChild(departureDateCell);

const returnDateCell = document.createElement('td');
returnDateCell.textContent = formData.returnDate;
tableRow.appendChild(returnDateCell);

const numPassengersCell = document.createElement('td');
numPassengersCell.textContent = formData.numPassengers;
tableRow.appendChild(numPassengersCell);

const driverCell = document.createElement('td');
driverCell.textContent = formData.driver;
tableRow.appendChild(driverCell);

const travelGuideLanguageCell = document.createElement('td');
travelGuideLanguageCell.textContent = formData.travelGuideLanguage;
tableRow.appendChild(travelGuideLanguageCell);

const termsAndConditionsCell = document.createElement('td');
termsAndConditionsCell.textContent = formData.termsAndConditions ? 'Yes' : 'No';
tableRow.appendChild(termsAndConditionsCell);

// Create a delete button and add it to the table row
const deleteButtonCell = document.createElement('td');
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', () => {
	tableBody.removeChild(tableRow);
});
deleteButtonCell.appendChild(deleteButton);
tableRow.appendChild(deleteButtonCell);

// Add the table row to the table body
tableBody.appendChild(tableRow);
}

// Clear the form
function clearForm() {
document.getElementById('main_passenger_name').value = '';
document.getElementById('nic_no').value = '';
document.getElementById('telephone_number').value = '';
document.getElementById('from').value = '';
document.getElementById('to').value = '';
document.getElementById('departure_date').value = '';
document.getElementById('return_date').value = '';
document.getElementById('num_passengers').value = '';
document.getElementById('driver').value = '';
document.getElementById('travel_guide_language').value = '';
document.getElementById('terms_and_conditions').checked = false;
}

// Load the table data from local storage and add it to the table
function loadTableData() {
// Get the table body element
const tableBody = document.querySelector('#table tbody');
// Load the table data from local storage
const tableData = JSON.parse(localStorage.getItem('tableData')) || [];

// Add each row of data to the table
tableData.forEach((rowData) => {
	addTableRow(rowData);
});
}

// Save the table data to local storage
function saveTableData() {
// Get the table rows
const tableRows = document.querySelectorAll('#table tbody tr');
// Create an array to hold the table data
const tableData = [];

// Add each row of data to the array
tableRows.forEach((row) => {
	// Get the row data from the table cells
	const mainPassengerName = row.cells[0].textContent;
	const nicNo = row.cells[1].textContent;
	const telephoneNumber = row.cells[2].textContent;
	const from = row.cells[3].textContent;
	const to = row.cells[4].textContent;
	const departureDate = row.cells[5].textContent;
	const returnDate = row.cells[6].textContent
	const numPassengers = row.cells[7].textContent;
	const driver = row.cells[8].textContent;
	const travelGuideLanguage = row.cells[9].textContent;
	const termsAndConditions = row.cells[10].textContent === 'Yes';

	// Add the row data to the array
	tableData.push({
		mainPassengerName,
		nicNo,
		telephoneNumber,
		from,
		to,
		departureDate,
		returnDate,
		numPassengers,
		driver,
		travelGuideLanguage,
		termsAndConditions,
	});
});

// Save the table data to local storage
localStorage.setItem('tableData', JSON.stringify(tableData));
}

// Add an event listener to the form submit button
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
// Prevent the default form submit behavior
event.preventDefault();
// Get the form data
const formData = {
	mainPassengerName: document.getElementById('main_passenger_name').value,
	nicNo: document.getElementById('nic_no').value,
	telephoneNumber: document.getElementById('telephone_number').value,
	from: document.getElementById('from').value,
	to: document.getElementById('to').value,
	departureDate: document.getElementById('departure_date').value,
	returnDate: document.getElementById('return_date').value,
	numPassengers: document.getElementById('num_passengers').value,
	driver: document.getElementById('driver').value,
	travelGuideLanguage: document.getElementById('travel_guide_language').value,
	termsAndConditions: document.getElementById('terms_and_conditions').checked,
};

// Add the form data to the table
addTableRow(formData);

// Save the table data to local storage
saveTableData();

// Clear the form
clearForm();
});

// Load the table data on page load
loadTableData();
// Update a table row
function updateTableRow(index, formData) {
    // Get the table row to update
    const table = document.querySelector('table');
    const row = table.rows[index + 1];

    // Update the row data
row.cells[0].textContent = formData.mainPassengerName;
row.cells[1].textContent = formData.nicNo;
row.cells[2].textContent = formData.telephoneNumber;
row.cells[3].textContent = formData.from;
row.cells[4].textContent = formData.to;
row.cells[5].textContent = formData.departureDate;
row.cells[6].textContent = formData.returnDate;
row.cells[7].textContent = formData.numPassengers;
row.cells[8].textContent = formData.driver;
row.cells[9].textContent = formData.travelGuideLanguage;
row.cells[10].textContent = formData.termsAndConditions ? 'Yes' : 'No';
}

// Update the table data in local storage
function updateTableData(index, formData) {
// Get the table data from local storage
const tableData = JSON.parse(localStorage.getItem('tableData'));
// Update the row data
tableData[index] = formData;

// Save the updated table data to local storage
localStorage.setItem('tableData', JSON.stringify(tableData));
// Update the row data
tableData[index] = formData;

// Save the updated table data to local storage
localStorage.setItem('tableData', JSON.stringify(tableData));
}
// Add an event listener to the table rows
const table = document.querySelector('table');
table.addEventListener('click', (event) => {
// Check if the event target is a delete or edit button
if (event.target.classList.contains('delete-btn')) {
// Delete the table row
const row = event.target.parentNode.parentNode;
deleteTableRow(row.rowIndex - 1);
	// Save the updated table data to local storage
	saveTableData();
} else if (event.target.classList.contains('edit-btn')) {
	// Get the form and update button elements
	const form = document.querySelector('form');
	const updateBtn = form.querySelector('button[type="submit"]');

	// Get the table row index to update
	const row = event.target.parentNode.parentNode;
	const rowIndex = row.rowIndex - 1;

	// Get the row data from local storage
	const tableData = JSON.parse(localStorage.getItem('tableData'));
	const formData = tableData[rowIndex];

	// Set the form data
	document.getElementById('main_passenger_name').value = formData.mainPassengerName;
	document.getElementById('nic_no').value = formData.nicNo;
	document.getElementById('telephone_number').value = formData.telephoneNumber;
	document.getElementById('from').value = formData.from;
	document.getElementById('to').value = formData.to;
	document.getElementById('departure_date').value = formData.departureDate;
	document.getElementById('return_date').value = formData.returnDate;
	document.getElementById('num_passengers').value = formData.numPassengers;
	document.getElementById('driver').value = formData.driver;
	document.getElementById('travel_guide_language').value = formData.travelGuideLanguage;
	document.getElementById('terms_and_conditions').checked = formData.termsAndConditions;

	// Set the update button text and data-index attribute
	updateBtn.textContent = 'Update';
	updateBtn.dataset.index = rowIndex;

	// Scroll to the top of the form
	form.scrollIntoView({ behavior: 'smooth' });
}
});

// Add an event listener to the form update button
const updateBtn = document.querySelector('button[type="submit"]');
updateBtn.addEventListener('click', (event) => {
// Prevent the default form submit behavior
event.preventDefault();
// Get the form data
const formData = {
	mainPassengerName: document.getElementById('main_passenger_name').value,
	nicNo: document.getElementById('nic_no').value,
	telephoneNumber: document.getElementById('telephone_number').value,
	from: document.getElementById('from').value,
	to: document.getElementById('to').value,
	departureDate: document.getElementById('departure_date').value,
	returnDate: document.getElementById('return_date').value,
	numPassengers: document.getElementById('num_passengers').value,
	driver: document.getElementById('driver').value,
	travelGuideLanguage: document.getElementById('travel_guide_language').value,
	termsAndConditions: document.getElementById('terms_and_conditions').checked
};

// Get the update button index
const index = parseInt(event.target.dataset.index);

// Update the table row and data
updateTableRow(index, formData);
updateTableData(index, formData);

// Clear the form and reset the update button
document.querySelector('form').reset();
event.target.textContent = 'Submit';
delete event.target.dataset.index;

// Save the updated table data to local storage
saveTableData();
});

// Function to handle delete button click
function handleDeleteButtonClick(event) {
    // Get the index of the table row to be deleted
    const index = parseInt(event.target.dataset.index);
    // Remove the table row and delete the corresponding data
deleteTableRow(index);
deleteTableData(index);

// Save the updated table data to local storage
saveTableData();
}

// Add event listeners to the table for edit and delete button clicks
document.querySelector('table').addEventListener('click', function(event) {
if (event.target.classList.contains('edit-button')) {
handleEditButtonClick(event);
} else if (event.target.classList.contains('delete-button')) {
handleDeleteButtonClick(event);
}
});

// Initialize the table with data from local storage
initializeTableData();

// Function to initialize the table with data from local storage
function initializeTableData() {
const tableData = JSON.parse(localStorage.getItem('tableData')) || [];

tableData.forEach(function(data, index) {
	// Create a table row with the data
	const tableRow = createTableRow(index, data);

	// Add the table row to the table
	document.querySelector('table tbody').appendChild(tableRow);
});
}

// Function to save the table data to local storage
function saveTableData() {
const tableData = [];
// Loop through the table rows and extract the data
document.querySelectorAll('table tbody tr').forEach(function(tableRow) {
	const data = {
		mainPassengerName: tableRow.querySelector('.main-passenger-name').textContent,
		nicNo: tableRow.querySelector('.nic-no').textContent,
		telephoneNumber: tableRow.querySelector('.telephone-number').textContent,
		from: tableRow.querySelector('.from').textContent,
		to: tableRow.querySelector('.to').textContent,
		departureDate: tableRow.querySelector('.departure-date').textContent,
		returnDate: tableRow.querySelector('.return-date').textContent,
		numPassengers: tableRow.querySelector('.num-passengers').textContent,
		driver: tableRow.querySelector('.driver').textContent,
		travelGuideLanguage: tableRow.querySelector('.travel-guide-language').textContent,
		termsAndConditions: tableRow.querySelector('.terms-and-conditions').textContent === 'Yes'
	};

	// Add the data to the table data array
	tableData.push(data);
});

// Save the table data to local storage
localStorage.setItem('tableData', JSON.stringify(tableData));
// Function to create a table row with data
function createTableRow(index, data) {
    // Create the table row and cells
    const tableRow = document.createElement('tr');
    const mainPassengerNameCell = document.createElement('td');
    const nicNoCell = document.createElement('td');
    const telephoneNumberCell = document.createElement('td');
    const fromCell = document.createElement('td');
    const toCell = document.createElement('td');
    const departureDateCell = document.createElement('td');
    const returnDateCell = document.createElement('td');
    const numPassengersCell = document.createElement('td');
    const driverCell = document.createElement('td');
    const travelGuideLanguageCell = document.createElement('td');
    const termsAndConditionsCell = document.createElement('td');
    const editButtonCell = document.createElement('td');
    const deleteButtonCell = document.createElement('td');
}}
