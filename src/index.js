// write your code here


//when the page loads
//request data from the API to get ramen Objects
//display each ramen image using an img tag inside #ramen-menu div

document.addEventListener("DOMContentLoaded", () =>{

const ramenImagesDiv = document.querySelector('#ramen-menu');
const ramenImage = document.querySelector('.detail-image');
const ramenName = document.querySelector('.name');
const ramenRestaurant = document.querySelector('.restaurant');
const ramenRating = document.querySelector('#rating-display');
const ramenComments = document.querySelector('#comment-display');

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramenData => {
    ramenData.forEach(ramen => {
        const ramenImg = document.createElement('img');
        ramenImagesDiv.append(ramenImg);
        ramenImg.setAttribute("src", `${ramen.image}`)

        //when a ramen image is clicked, user should see ramen details 
        //on #ramen-detail div
        //comments and rating information as well
        ramenImg.addEventListener('click', () => {
            ramenImage.setAttribute('src', `${ramen.image}`)
            ramenName.innerText = `${ramen.name}`
            ramenRestaurant.innerText = `${ramen.restaurant}`
            ramenRating.innerText = `${ramen.rating}`
            ramenComments.innerText= `${ramen.comment}`
        })
    })
})






})







