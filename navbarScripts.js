function highlightNavbar(path, highlightedElement) {
    if (window.location.pathname.includes(path)) {
        document.getElementById(highlightedElement).style.background = 'rgb(44, 84, 30)';
    }
}