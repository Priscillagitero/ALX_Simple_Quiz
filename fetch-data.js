// ------------------------------------------
// Function to fetch and display user data
// ------------------------------------------
async function fetchUserData() {

    // 1. API URL where we will fetch the user data
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 2. Select the div where data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // 3. Fetch data from the API asynchronously
        const response = await fetch(apiUrl);

        // 4. Convert the response to JSON format
        const users = await response.json();

        // 5. Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // 6. Create a <ul> element to store the list of users
        const userList = document.createElement('ul');

        // 7. Loop through each user and add their name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');  // create new list item
            listItem.textContent = user.name;               // set user name
            userList.appendChild(listItem);                 // add to the list
        });

        // 8. Add the <ul> list to the page
        dataContainer.appendChild(userList);

    } catch (error) {
        // If anything goes wrong (no internet, server error, etc.)
        
        dataContainer.innerHTML = '';  
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// ------------------------------------------
// Run the function after the webpage loads
// ------------------------------------------
document.addEventListener('DOMContentLoaded', fetchUserData);
