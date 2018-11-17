
// api_key=7fOOB37hkeKK1KWt7attztq3pWFV27Z8SLfdXEX7"

const nasaApp =  {};

console.log(`the nasaAPP is ${nasaApp}`);


nasaApp.getRecord = function (record) {
  //AJAX require for art pieces goes here

  $.ajax({
      url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=7fOOB37hkeKK1KWt7attztq3pWFV27Z8SLfdXEX7",
      method: 'GET',
      dataType: 'json',
    }).then(data => {
    console.log(`all data is`,data)
    console.log(`the data is`, data.photos[0].img_src);
    photo = data.photos[0].img_src;
    document.getElementById("myImg").src = photo;
    console.log(photo)
    })
    .fail(err => console.log('you got an error Richard',err))
  };




nasaApp.init = function () {
  //code to kick off ap, event listeners, any functions that you want to call immediately, stuff that does not need any user input

  console.log('in the init')

  $("#record").on("change", function(){
    console.log("new record selected");

});

nasaApp.getRecord();


;};

nasaApp.displayPieces = function(records) {
  records.forEach(function(element) {
    console.log(`the element is ${element}`)
  })

}


$(function() {
  nasaApp.init();
})
