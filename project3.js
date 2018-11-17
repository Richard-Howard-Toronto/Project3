
// api_key=7fOOB37hkeKK1KWt7attztq3pWFV27Z8SLfdXEX7"

const nasaApp =  {};

// // store in global object called nasaApp.photolist
// // in the then function this is where I do that
// nasaApp.photolist = data.photos, so now I will have the list available globally so i don't have to call all the photos, then take the math random function and will have nasaApp.photolist[random number].img_src

// then pass the image source into the render photo


nasaApp.getRecord = function() {
  //AJAX require for art pieces goes here
  console.log("getting record")
  $.ajax({
      url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=7fOOB37hkeKK1KWt7attztq3pWFV27Z8SLfdXEX7",
      method: 'GET',
      dataType: 'json',
    }).then(data => {
      // console.log(`the data is`, data.photos[0].img_src);
      photo = data.photos[0].img_src;
      nasaApp.renderPhoto(photo);
    })
    .fail(err => console.log('you got an error Richard',err))
  };

  nasaApp.renderPhoto = (photo) => {
    const image = `<img id="theImg" src="${photo}"/>`
    $("#theDiv").append(image);
  };


nasaApp.init = function () {
  //code to kick off ap, event listeners, any functions that you want to call immediately, stuff that does not need any user input

  console.log('in the init');

  $('#changePhoto').on('click', function(e) {
    e.preventDefault();
    nasaApp.getRecord();
  });

  // $("#record").on("change", function(){
  //   console.log("new record selected");
  // }
  nasaApp.getRecord();
};


// nasaApp.displayPieces = function(records) {
//   records.forEach(function(element) {
//     console.log(`the element is ${element}`)
//   })
//
// }


$(function() {
  nasaApp.init();
})
