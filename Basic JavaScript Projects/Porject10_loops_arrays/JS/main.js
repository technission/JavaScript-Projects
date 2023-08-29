function Call_Loop() {                          //delcared a function to call for a loop (yes there is no loop here...)
    var string_length_demo = "Hello";           //demonstrating declaring a string...
    document.write(string_length_demo.length);  //getting the length of the above string (this method will be used for a lot of our loops)
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];           //declared an array
var Content ="";    //declaring and setting content for new array to nothing yet
var Y;              //declaring a varible for y which will be used IN the loop to go through the length
function for_Loop() {       //this loop will build our new array
    for (Y = 0; Y < Instruments.length; Y++) {      //for loop will be adding 1 to Y each time the loop is executed
        Content += Instruments[Y] + "<br>";         //this will output an instrument then a break in html and then another instrument and another break---repeat
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;         //this will display the list in the paragraph with the id of List_of_Instruments
}

function array_Function() {                                     //declaring an array function 
    var array = ["Books", "Tablets", "Phones", "Computers"];    //defined an array
    document.getElementById("Array").innerHTML = array[1];
}

function constant_function() {                                                      //delcared a function for constants
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};      //created an object
    Musical_Instrument.color = "blue";                                              //changed a value of the object
    Musical_Instrument.price = "$900";                                              //adding a value to the object
    var new_Price = "$300";                                                         //showing the difference between var and let with curly braces
    {
        let new_Price = "$600";                                                     //using the let keyword as you can see below because we used let then we cannot access it outside the curly braces
        console.log(new_Price);                                                     //if you hit f12 on your browser you can see new price is set to 600 but only in this block of code because of the let
    }
    document.getElementById("Constant").innerHTML = "The cost of the " +            //displayed a string mixed with some data from the object
        Musical_Instrument.type + " was " + Musical_Instrument.price +
        ". It is " + Musical_Instrument.color + ", however it should be reduced in price to " + new_Price;
}


function return_Function(a, b) {                    // this function is using the return method
    return a + b;
}

console.log(return_Function(3, 4))                  //if you check the console using f12 you'll see the answer to 3 + 4

function description() {                                                                //declaring a function with an object defined inside it with a function
    let car = {
        make: "Dodge",
        model: "Ram 1500",
        year: "2011",
        color: "Black",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;       // this returns a string with a bunch of data from the object
        }
    };
document.getElementById("Car_Object").innerHTML = car.description();                        //this will display that string
}

function continue_method() {                                                                //declaring a function for use of the <br> and the continue method
    var text=""                                                                             //declaring an empty string for the original output before the loop
    for (let i = 0; i < 5; i++) {                                                           //looping through until i is less than 5
        if (i === 2) { continue; }                                                          //if i is equal to 2 then we skip the number 2 using the continue which will continue through the loop
        text += "The number is " + i +"<br>"                                                //setting a new value for the text variable with an html break at the end which is just simply a new line
        document.getElementById("continue").innerHTML = text                                //displaying everything except the second loop through
    }
}