function countdown() {                  //declared a function for counting down seconds
    var seconds = document.getElementById("seconds").value;     //getting input from html

    function tick() {                   //declared a function inside another function
        seconds = seconds -1;                       //setting seconds to seconds -1 for the countdown to happen
        timer.innerHTML = seconds;                  //displaying the seconds on html page while counting down
        var time = setTimeout(tick, 1000);          //pausing for 1000 milliseconds
        if (seconds == -1) {                        //if statement that says if seconds is equal to -1 then---
            alert("Time's up");                     //send an alert for the timer countdown being finished and---
            clearTimeout(time);                     //clearing Timeout time
            timer.innerHTML = "";                   //resetting the display on the html page
        }
    }
    tick();                                         //calling for function tick() to be executed
}

let slideIndex = 1;                                 //declaring a variable for the slide index
showSlides(slideIndex);                             //calling the function showSlides with slideIndex being passed in so basically showSlides(1)

// Next/previous controls
function plusSlides(n) {                            //declaring a function for the controls on the slideshow
  showSlides(slideIndex += n);                      //calling the function show slides with slide index adding n to it's value
}

// Thumbnail image controls
function currentSlide(n) {                          //declaring a function for the image controls
  showSlides(slideIndex = n);                       //calling the function show slides setting it equal to n *if you are having trouble this is where n is given it's first value (1)
}

function showSlides(n) {                                                //the main function being called from above multiple times with the n variable
  let i;                                                                //declaring a constant i varaible with no default value
  let slides = document.getElementsByClassName("mySlides");             //declaring a variable slides and setting it to be the count of the class mySlides (3)
  let dots = document.getElementsByClassName("dot");                    //declaring a variable dots and setting it to be the count of the class dots (3)
  if (n > slides.length) {slideIndex = 1}                               //if n is greater than 3 (that's how many images there are to be displayed) then we're setting slideIndex with the value of 1 
  if (n < 1) {slideIndex = slides.length}                               //if n is less than 1 then we are setting slideIndex equal to the slides.length
  for (i = 0; i < slides.length; i++) {                                 //for loop which is looping through the slides.length
    slides[i].style.display = "none";                                   //turning on the display for the picture needing to be shown
  }
  for (i = 0; i < dots.length; i++) {                                   //for loop which is looping through the dots.length
    dots[i].className = dots[i].className.replace(" active", "");       //setting the dots active or not active based on the loop
  }
  slides[slideIndex-1].style.display = "block";                         //blocking out the pictures not needing to be seen
  dots[slideIndex-1].className += " active";                            //setting the dots active
}