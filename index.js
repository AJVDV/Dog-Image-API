'use strict';

function getDogImages(){
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumElement.val()}`)
    .then(response => {
        console.log(response)
/*        let ImageInfo = JSON.parse(data);
        let pics = "";
        for (i=0;i<imagesInfo.length;i++){
            pics += `<li><img src='" + images[i] + "'/><span>" + images[i] + "</span></li>`;
        }
        */
    })
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
        let userNumElement = $(event.currentTarget).find('#dog-pic-number');
        getDogImages();
    });
}

$(function() {
    console.log('app loaded! waiting for submit!');
    watchForm();
});