function highlightNavbar(path, highlightedElement) {
    var currentPage = window.location.pathname.split('/').pop(); 

    if (currentPage !== 'index.html' && window.location.pathname.includes(path)) {
        document.getElementById(highlightedElement).style.background = 'rgb(49, 91, 117)';
    }
}
