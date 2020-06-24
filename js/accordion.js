const albumAccordion = document.querySelector('.albumContainer');
const songs = document.querySelectorAll('.songList');
const albums = document.querySelectorAll('.album');

function toggleAlbumAccordion() {
    const thisItem = this.parentNode;
    songs.forEach(song => {
        if (thisItem == song) {
            thisItem.classList.toggle('open');
            return;
        }
        song.classList.remove('open');
    })
}

albums.forEach(album => album.addEventListener('click', toggleAlbumAccordion));