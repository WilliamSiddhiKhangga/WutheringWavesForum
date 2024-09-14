const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Check login state on page load
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        handleLoginState();
    }
});

// Function to handle login state
function handleLoginState() {
    wrapper.style.display = 'none';
    btnPopup.textContent = 'Logout';
    btnPopup.removeEventListener('click', openPopup);
    btnPopup.addEventListener('click', handleLogout);
}

// Function to handle successful login
function handleLoginSuccess() {
    // Hide the entire wrapper container
    wrapper.style.display = 'none';
    
    // Change button text and functionality
    btnPopup.textContent = 'Logout';
    btnPopup.removeEventListener('click', openPopup); // Remove existing click event
    btnPopup.addEventListener('click', handleLogout); // Add new click event for logout
    
    // Store login state in local storage
    localStorage.setItem('isLoggedIn', 'true');
}

// Function to handle logout
function handleLogout() {
    // Reset button text and functionality
    btnPopup.textContent = 'Login';
    btnPopup.classList.remove('logout'); // Remove class if added
    btnPopup.removeEventListener('click', handleLogout); // Remove existing click event
    btnPopup.addEventListener('click', openPopup); // Add new click event for login
    
    // Show the wrapper container again
    wrapper.style.display = 'flex'; // or 'block', depending on your layout
    
    // Clear login state from local storage
    localStorage.removeItem('isLoggedIn');
}

// Function to open popup
function openPopup() {
    wrapper.classList.add('active-popup');
}

// Function to close popup
function closePopup() {
    wrapper.classList.remove('active-popup');
}

// Event listeners
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', openPopup);
iconClose.addEventListener('click', closePopup);

// Simulate successful login after form submission
document.querySelector('.form-box.login form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    handleLoginSuccess(); // Handle login success
});

document.addEventListener('click', () => {
    const audio = document.getElementById('background-music');
    if (audio.muted) {
        audio.muted = false;  // Unmute the audio after user interaction
        audio.play();
    }
});