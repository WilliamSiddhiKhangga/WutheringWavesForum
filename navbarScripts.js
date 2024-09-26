function highlightNavbar(path, highlightedElement) {
    // Dapatkan nama file dari URL
    var currentPage = window.location.pathname.split('/').pop(); 

    // Jika bukan index.html, lakukan highlight
    if (currentPage !== 'index.html' && window.location.pathname.includes(path)) {
        document.getElementById(highlightedElement).style.background = 'rgb(49, 91, 117)';
    } else {
        // Menghapus highlight jika halaman index.html
        document.getElementById(highlightedElement).style.background = ''; // Kembalikan ke default (atau tambahkan warna default)
    }
}
