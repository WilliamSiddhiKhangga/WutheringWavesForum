document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search input[type="search"]');

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();

        const Items = document.querySelectorAll('.filterable .character');

        Items.forEach(function (item) {
            const itemName = item.querySelector('figcaption').textContent.toLowerCase();

            if (itemName.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
