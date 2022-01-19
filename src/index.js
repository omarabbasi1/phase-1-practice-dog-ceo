// //console.log('%c HI', 'color: firebrick') 
document.addEventListener("DOMContentLoaded", (event) => {
 
//document selectors
let imgCont =  document.getElementById('dog-image-container')
let dogBreedCont = document.getElementById('dog-breeds')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// let array = []
// function fetchRandom(url) {
//         return fetch(url).then(response => response.json()) 
//             .then(data => renderImages(data))
            
//         }

// function logme(){
//         array.foreach(console.log('helloworld')) 
// }   
// logme()
    
//fetchRandom(imgUrl);
//}) add me back in when we put everything back into the DOMContentLoaded event listener

function addImages() {
    let img = document.createElement('img')
    img.src = "https://picsum.photos/200/300"
    imgCont.appendChild(img)
}
addImages()
addImages()
addImages()
addImages()
addImages()
addImages()

})