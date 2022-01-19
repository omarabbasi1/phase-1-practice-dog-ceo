//console.log('%c HI', 'color: firebrick') 
document.addEventListener("DOMContentLoaded", (event) => {
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    
    function fetchRandom(url) {

        fetch(url).then(response => response.json()) 

        .then(data => console.log(data))

    }
fetchRandom(imgUrl);
})

