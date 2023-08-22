function math() {                                       //declared a function called Math
    var sum = 5 + 5;                                    //declared a variable to add 5 + 5
    document.getElementById("math").innerHTML = sum;    //used document.getElementById to show the variable sum when my paragraph is clicked
}

function subtract() {                                   //declared a function for subtraction
    var sub = 5 - 4;                                    //declared a variable to handle the subtraction operation
    document.getElementById("subtract").innerHTML = sub;//used document.getElementById to display the variable once the paragraph is clicked
}

function multiply() {                                   //declared a function for multiplication
    var mul = 5 * 4;                                    //declared a variable to handle the multiplication operation
    document.getElementById("multiply").innerHTML = mul;//used document.getElementById to display the variable once the paragraph is clicked
}

function divide() {                                   //declared a function for division
    var div = 15 / 5;                                 //declared a variable to handle the division operation
    document.getElementById("divide").innerHTML = div;//used document.getElementById to display the variable once the paragraph is clicked
}

function mul_operations() {                                   //declared a function for multiple operations
    var multi = (11 + 20) * 15 / 5 -8;                        //declared a variable to handle the multiple math operations
    document.getElementById("mul_operations").innerHTML = multi;//used document.getElementById to display the variable once the paragraph is clicked
}

function modulus_Operator() {                                          //declared a function for remainder operation
    var remainder = 13 % 5;                                            //declared a variable to handle the remainder operation
    document.getElementById("modulus_Operator").innerHTML = remainder; //used document.getElementById to display the variable once the paragraph is clicked
}

function negation_Operator() {                                          //declared a function for negation operation
    var X = 10;                                                         //declared a variable 
    document.getElementById("negation_Operator").innerHTML = -X; //used document.getElementById to display the variable once the paragraph is clicked
}

var y = 5;                              //declared a varible y with a value of 5
y++;                                    //increment y
document.write(y);                      //display it on the screen

var z = 5;                              //declared a varible z with a value of 5
y--;                                    //decrement y
document.write(y);                      //display it on the screen

window.alert(Math.random() * 100);      //display a random number between 0 and 100

window.alert(Math.PI);                  //use the math object, this display the value of PI
