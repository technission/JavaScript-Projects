function my_Function() {                            //declared a function with 4 strings declared as well
    var string1 = "this is the first string ";
    var string2 = "this is the second string ";
    var string3 = "this is the third string ";
    var string4 = "this is the fourth string ";
    var combined = string1.concat(string2, string3, string4);   //combined all the strings using the .concat method
    document.getElementById("message").innerHTML = combined;    //display the combined string
}

function slice_Function() {                                     //declared a function to slice
    var Sentence = "All work and no play makes Johnny a dull boy."; //declared a variable with string data
    var Section = Sentence.slice(27, 33);                            //performed slice on characters 27 through 33 notice the comma is meaning through not just those two numbers 27 and 33
    document.getElementById("Slice").innerHTML = Section.toUpperCase();           //display the result of the slice and used the toUpperCase string method to display it in all uppercase
    document.getElementById("Search").innerHTML = Sentence.search(/dull/);         //use the search method on a string to find the location of the word dull
}

function string_Method() {                                                  //declared a function to convert a data (integer) into string
    var X = 182;                                                            //our varible for the integer
    document.getElementById("Numbers_to_string").innerHTML = X.toString();  //display the variables data as a string
}

function precision_Method() {                               //declared a function for the precision method
    var X = 12938.3012987376112;                            //set a variable to a very long string
    document.getElementById("Precision").innerHTML = X.toPrecision(10);         //reduced the number down to 10 places and displayed it
    var num = 5.56789;
    document.getElementById("to_Fixed").innerHTML = num.toFixed();              //uses the to fixed method which comverts the number to a string and rounds the string to a specified number of decimals
    var string1 = "Hello, World"; 
    document.getElementById("value_Of").innerHTML = string1.valueOf();          //value of pretty much leaves the string in tact. You will not really use this in your code

}