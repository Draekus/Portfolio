
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCeV9Fh8IUqAp75Zeb6tI1GpSVIrii_7xs",
    authDomain: "portfolio-e34d1.firebaseapp.com",
    databaseURL: "https://portfolio-e34d1.firebaseio.com",
    projectId: "portfolio-e34d1",
    storageBucket: "",
    messagingSenderId: "240680028322"
  };
  firebase.initializeApp(config);
  
  
var database = firebase.database();


$(document).ready(function(){
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });


$("#submit-button").on("click", function(){
    event.preventDefault();
    let name = $('#first_name').val().trim();
    let email = $('#email').val().trim();
    let message = $('#textarea2').val().trim();
    let date = moment().format("MM-DD-YYYY");
    console.log(name, email, message)
    console.log(moment().format("MM-DD-YYYY"))
    database.ref().push({

        name: name,
        email: email,
        message: message,
        date: date
        
        
    });
    $('#first_name').val('')
    $('#email').val('')
    $('#textarea2').val('')
    $('.modal').modal();
})
  });
  