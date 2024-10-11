const category = document.querySelectorAll(".element_category button");
const filterElement = document.querySelectorAll('.filterable .character');

const filterCategory = e => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add("active");
    console.log(e.target);

    filterElement.forEach(character => {
        character.classList.add("hide");

        if(character.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            character.classList.remove("hide");
        }
    })
}
category.forEach(button => button.addEventListener('click', filterCategory));
