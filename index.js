'use strict';

function getDogImages(){
    let userNumElement = document.querySelector('#dog-pic-number').value;
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumElement}`)
    .then(response => response.json())
    .then(data => displayImages(data))
    .catch(error => alert('Something has gone wrong. Please refresh, or try again later'));
}

function displayImages(data) {
    const urls = data.message;
    for (let e of urls)
        document.querySelector('.dog-images').innerHTML += `<li class="x"><img src="${e}" alt="cute dogo"></li>`;
}

function clearImages() {
    $('.dog-images').remove('x');
}

function watchForm() {
    $('#js-dog-pic-form').submit(event => {
        event.preventDefault();
        clearImages();
        getDogImages();
        displayImages();
    });
}

$(function() {
    console.log('app loaded! waiting for submit!');
    watchForm();
});