'use strict';

let userNumElement = 0;
function getDogImages(){
    let userNumElement = document.querySelector('#dog-pic-number').value;
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumElement}`)
    .then(response => response.json())
    .then(data => console.log(data));
/*        let ImageInfo = JSON.parse(data);
        let pics = "";
        for (i=0;i<imagesInfo.length;i++){
            pics += `<li><img src='" + images[i] + "'/><span>" + images[i] + "</span></li>`;
        }
        */
}

/*function displayResults(responseJson) {
    console.log(responseJson);
    $('ul').append(
        `<li><img src="${responseJson.message}" class="results-img"></li>`
    )
    $('.results').removeClass('hidden');
}
*/
function watchForm() {
    $('#js-dog-pic-form').submit(event => {
        event.preventDefault();
        getDogImages();
    });
}

$(function() {
    console.log('app loaded! waiting for submit!');
    watchForm();
});