const form = document.getElementById('searchForm');
const input = document.getElementById('pesquisar');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (query) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = url;
    }
});
window.onload = function() {
    const body = document.body;
    const randomId = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/1920/1080?random=${randomId}`;
    
    body.style.backgroundImage = `url('${imageUrl}')`;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundColor = "#222";
};

function p() {
    document.getElementById("back").style.animation = "alternate a 1s";
    const bk = document.getElementById("back");
    bk.style.display = "block";
}

function fp() {
    document.getElementById("back").style.animation = "alternate b 1s";
    setTimeout(() => {
        document.getElementById("back").style.display = "none";
    }, 1000);
}