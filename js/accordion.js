const accordion = document.querySelector('.albumContainer');
const items = document.getElementById('list');
const albums = accordion.querySelectorAll('album');

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