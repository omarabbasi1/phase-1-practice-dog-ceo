document.addEventListener("DOMContentLoaded", (event) => {
// //console.log('%c HI', 'color: firebrick') 

    //document selectors
    const imgContainer =  document.querySelector('#dog-image-container')
    let dogBreedCont = document.getElementById('dog-breeds')

    //const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    function fetchRandom() {
        return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(data => renderImages(data))
    }
    function renderImages(data) {
        for (let dogs of data.message) {
            let img = document.createElement('img')
            img.src = dogs
            imgContainer.appendChild(img)
        }
    }
    fetchRandom()
})