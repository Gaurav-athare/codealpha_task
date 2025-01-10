const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const close = document.getElementById('close');

// Images to dynamically load into the gallery
const imageSources = [
    "https://th.bing.com/th?id=OIP.r8IqnZvajmcmfws6fDgfvwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.zCxoZZLh2y3FaW879rWHcQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.zsxVgLLWH6VF-CZcpC49MwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&w=310&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.lqriyU8qEZoThnDgH800dAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
   
];

// Dynamically populate the gallery
imageSources.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Gallery Image`;
    gallery.appendChild(img);
});

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modal.style.display = 'flex';
        modalImg.src = e.target.src;
    }
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
