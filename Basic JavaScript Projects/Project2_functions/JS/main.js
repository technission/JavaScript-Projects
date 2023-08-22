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

function getInfo() {                                            //Declaring a function
    var data = 5 + 5;                                           //Declaring a variable with the sum of two numbers
    document.getElementById("Sum").innerHTML = data;            //using the getElementById method to display the variable data which is the sum of the assigned two numbers 
}

function addition_Function() {                                          //declaring a function for math
    var addition = 2 + 2;                                               //declaring a variable addition for the sum of 2 + 2
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;  //using the get ElementById method to display the variable addition
}