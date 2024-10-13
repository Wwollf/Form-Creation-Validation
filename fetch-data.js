document.addEventListener('DOMContentLoaded', function() {
    // Define the asynchronous function to fetch user data
    async function fetchUserData() {
        // API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        // Select the data container element
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            
            // Convert the response to JSON
            const users = await response.json();
            
            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the user list
            const userList = document.createElement('ul');

            // Loop through the users and create <li> elements
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the text to the user's name
                userList.appendChild(listItem); // Append the <li> to the <ul>
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Clear the content and display an error message
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data.';
        }
    }

    // Call fetchUserData when the DOM content is fully loaded
    fetchUserData();
});
