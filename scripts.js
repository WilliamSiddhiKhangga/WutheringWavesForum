const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Function to handle login state
function handleLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        if (window.location.pathname.includes('index.html')) {
            window.location.href = 'main.html';
        } else if (window.location.pathname.includes('main.html')) {
            if (btnPopup) {
                btnPopup.textContent = 'Logout';
                btnPopup.removeEventListener('click', openPopup);
                btnPopup.addEventListener('click', handleLogout);
            }
        }
    } else {
        if (btnPopup) {
            btnPopup.textContent = 'Login';
            btnPopup.removeEventListener('click', handleLogout);
            btnPopup.addEventListener('click', redirectToLogin);
        }
    }
}

// Function to handle successful login
function handleLoginSuccess() {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'main.html';
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}

// Function to open popup
function openPopup() {
    wrapper.classList.add('active-popup');
}

// Function to close popup
function closePopup() {
    wrapper.classList.remove('active-popup');
}

// Function to redirect to index.html with login form open
function redirectToLogin() {
    window.location.href = 'index.html?openLogin=true';
}

// Event listeners for login and registration
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const openLogin = params.get('openLogin') === 'true';

    if (btnPopup) {
        btnPopup.addEventListener('click', () => {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (isLoggedIn) {
                handleLogout();
            } else {
                redirectToLogin(); // Use redirectToLogin function to navigate to index.html
            }
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
        });
    }
    
    if (loginLink) {
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });
    }

    if (iconClose) {
        iconClose.addEventListener('click', closePopup);
    }

    const loginForm = document.querySelector('.form-box.login form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            handleLoginSuccess();
        });
    }

    // Show login popup if the URL parameter indicates so
    if (window.location.pathname.includes('index.html') && openLogin) {
        openPopup();
        // Remove the parameter from the URL to prevent reopening the popup on reload
        const newURL = window.location.href.split('?')[0];
        window.history.replaceState({}, document.title, newURL);
    }

    if (window.location.pathname.includes('main.html')) {
        handleTabNavigation();
    }

    const audio = document.getElementById('background-music');
    if (audio) {
        document.addEventListener('click', () => {
            if (audio.muted) {
                audio.muted = false;
                audio.play();
            }
        });
    }

    handleLoginState();
});

// Handle tab navigation on main.html
function handleTabNavigation() {
    const currentTab = localStorage.getItem('currentTab') || 'home';
    
    document.querySelectorAll('.tab-content').forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(currentTab);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    document.querySelectorAll('.navigation a').forEach(tabLink => {
        tabLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetTab = this.getAttribute('data-tab');

            document.querySelectorAll('.tab-content').forEach(section => {
                section.style.display = 'none';
            });

            document.getElementById(targetTab).style.display = 'block';

            localStorage.setItem('currentTab', targetTab);
        });
    });
}