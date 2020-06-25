const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');
const albums = accordion.querySelectorAll('.album');

function toggleAccordion() {
    const thisItem = this.parentNode;
    items.forEach(item => {
        if (thisItem == item) {
            thisItem.classList.toggle('open');
            return;
        }
        item.classList.remove('open');
    })
}

albums.forEach(album => album.addEventListener('click', toggleAccordion));