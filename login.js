const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.getElementById('loginBtn');
const iconClose = document.querySelector('.icon-close');

// Fungsi untuk memeriksa status login dan memperbarui tampilan tombol
function handleLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        btnPopup.textContent = 'Logout';
        btnPopup.removeEventListener('click', redirectToLogin);
        btnPopup.addEventListener('click', handleLogout);
    } else {
        btnPopup.textContent = 'Login';
        btnPopup.removeEventListener('click', handleLogout);
        btnPopup.addEventListener('click', redirectToLogin);
    }
}

// Fungsi yang dipanggil saat login berhasil
function handleLoginSuccess() {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html'; // Arahkan ke halaman utama setelah login
}

// Fungsi untuk logout dan menghapus status login
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    handleLoginState(); // Perbarui tampilan setelah logout
}

// Fungsi untuk mengarahkan ke halaman login
function redirectToLogin() {
    window.location.href = 'login.html'; // Arahkan ke halaman login
}

// Jalankan fungsi ini saat dokumen siap
document.addEventListener("DOMContentLoaded", () => {
    handleLoginState(); // Cek status login saat halaman dimuat

    // Menambahkan event listener untuk form login (hanya jika di halaman login)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Mencegah refresh halaman setelah submit
            handleLoginSuccess(); // Simpan status login setelah berhasil
        });
    }

    // Jika ada popup close button
    if (iconClose) {
        iconClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });
    }

    // Jika ada tombol login/register toggle
    if (registerLink) {
        registerLink.addEventListener('click', () => wrapper.classList.add('active'));
    }

    if (loginLink) {
        loginLink.addEventListener('click', () => wrapper.classList.remove('active'));
    }
});
