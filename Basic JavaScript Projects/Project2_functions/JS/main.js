function My_First_Function() {                                  //Declaring a function
    var str = "This is the button text!";                       //Declaring a variable for the button to display after click
    var para = "Blah Blah Blah"                                 //Declaring a variable for a paragraph element to display after button is clicked
    document.getElementById("Button_Text").innerHTML = str;     //using the getElementById method to display the str variable
    document.getElementById("Paragraph_1").innerHTML = para;    //using the same method to display the para variable
}

function myFunction() {                                         //Declaring a function
    var sentence = "This is my";                                //Declaring a variable for the beginning of my string
    sentence += " string!"                                      //adding to (concantenaing) the string
    document.getElementById("Concatenate").innerHTML = sentence; //using the getElementById method to display the sentence variable once the click happens
}