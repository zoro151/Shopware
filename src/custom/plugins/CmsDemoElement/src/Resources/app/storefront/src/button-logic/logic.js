document.addEventListener('DOMContentLoaded', function () {
    const catButton = document.getElementById('catButton');

    if (catButton) {
        catButton.addEventListener('click', function () {
            fetchCatPics();
        });
    }
});

// Function to make an API call to get cat pictures
function fetchCatPics() {
    // Example API endpoint (you can replace this with any actual API URL)
    const apiUrl = 'https://cataas.com/cat';

    // Make a GET request to the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const catImageUrl = data[0].url;

                // For example, let's log the cat image URL or use it in the UI
                console.log('Cat Image URL:', catImageUrl);

                // Optionally, you could display the image on the page
                displayCatImage(catImageUrl);
            }
        })
        .catch(error => {
            console.error('Error fetching cat pics:', error);
        });
}

// Function to display cat image on the page (optional)
function displayCatImage(url) {
    const imageContainer = document.createElement('div');
    const catImage = document.createElement('img');
    catImage.src = url;
    catImage.alt = 'Cat Picture';
    catImage.style.width = '200px';
    catImage.style.height = 'auto';

    imageContainer.appendChild(catImage);
    document.body.appendChild(imageContainer);  // Adds the image to the bottom of the page
}
