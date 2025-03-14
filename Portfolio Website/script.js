const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const loadMoreButton = document.getElementById('load-more-btn');
const allProjects = document.querySelectorAll('.project-card');  // All the project cards (hidden ones too)
const projectsPerLoad = 3;  // Number of projects to load at a time

// Function to update the remaining count in parentheses next to "Load More" button
function updateRemainingCount() {
    const hiddenProjects = document.querySelectorAll('.project-card.hidden');  // Only count the hidden projects
    const remainingProjects = hiddenProjects.length;
    const remainingCountElement = document.getElementById('remaining-count');
    
    // Update the remaining count inside the button
    if (remainingCountElement) {
        remainingCountElement.textContent = `(${remainingProjects})`;  // Shows the remaining projects
    }
}

// Function to load 3 more projects
function loadMoreProjects() {
    // Select the next 3 hidden projects
    const hiddenProjects = document.querySelectorAll('.project-card.hidden');
    
    // Loop through the next 3 hidden projects and make them visible
    for (let i = 0; i < Math.min(projectsPerLoad, hiddenProjects.length); i++) {
        hiddenProjects[i].classList.remove('hidden');  // Reveal the project
    }

    // Update the remaining count after loading more projects
    updateRemainingCount();

    // If there are no more hidden projects, hide the "Load More" button
    if (hiddenProjects.length <= projectsPerLoad) {
        loadMoreButton.style.display = 'none';  // Hide button when no more projects
    }
}

// Initial setup: Update remaining count when the page loads
updateRemainingCount();

// Add event listener for the load more button
loadMoreButton.addEventListener('click', loadMoreProjects);


// Function to open the modal for any project
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close the modal for any project
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Generic function to setup the modal for any button and close button
function setupModal(buttonId, modalId, closeButtonId) {
    var button = document.getElementById(buttonId);
    var modal = document.getElementById(modalId);
    var closeButton = document.getElementById(closeButtonId);

    if (button && modal && closeButton) {
        button.onclick = function() {
            openModal(modalId); // Open the modal
        };

        closeButton.onclick = function() {
            closeModal(modalId); // Close the modal
        };

        // Close the modal if clicked outside
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal(modalId);
            }
        };
    }
}

// Setup modals for different projects (Marvel Rivals, Greeting Twitch Bot, Scoreboard, Timer)
setupModal("openVideoBtn1", "videoModal1", "closeBtn1");  // Marvel Rivals
setupModal("openVideoBtn2", "videoModal2", "closeBtn2");  // Greeting Twitch Bot
setupModal("openVideoBtn3", "videoModal3", "closeBtn3");  // Scoreboard
setupModal("openVideoBtn4", "videoModal4", "closeBtn4");  // Timer