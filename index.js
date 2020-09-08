'use strict';

let userNumElement = 0;
function getDogImages(){
    let userNumElement = document.querySelector('#dog-pic-number').value;
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumElement}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something has gone wrong. Please refresh, or try again later'));
    let imageInfo = object.message;
    let pics = "";
    for (i=0;i<imageInfo.length;i++){
        pics += `<li><img src'" + images[i] + "'/><span>" + images[i] + "</span></li>`;
    }
/*        let ImageInfo = JSON.parse(data);
        let pics = "";
        for (i=0;i<imagesInfo.length;i++){
            pics += `<li><img src='" + images[i] + "'/><span>" + images[i] + "</span></li>`;
        }
        */
}

function displayResults(responseJson) {
    console.log(responseJson);
/*
    let imageInfo = JSON.parse(data);
    let pics = "";
    for (i=0;i<imageInfo.length;i++){
        pics += `<li><img src'" + images[i] + "'/><span>" + images[i] + "</span></li>`;
    }
*/
    $('.dog-pics').append(
        pics
    )
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('#js-dog-pic-form').submit(event => {
        event.preventDefault();
        getDogImages();
        displayResults();
    });
}

$(function() {
    console.log('app loaded! waiting for submit!');
    watchForm();
});