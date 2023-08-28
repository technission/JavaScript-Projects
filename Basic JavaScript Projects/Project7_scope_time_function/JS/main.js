var x = 10;                                                                     //declaring a global variable
console.log(x);                                                                 //display the value of x
function my_Function() {                                                        //declaring a function
    var y = 15;                                                                 //a local variable
    console.log(y)
}

function error_Function() {                                                     //creating an error function to show the importance of local and global variables
    var result = x + y;                                                         //declaring a variable to add x and y                                                           
    console.log(result);                                                        //console log 
}
my_Function();                                                                  //calling first function
error_Function();                                                               //calling the error function

function get_Date() {                                                           //declaring a function for getting the date by hours
    if (new Date().getHours() < 24) {                                           //if statement stating if it's before midnight then ----
        document.getElementById("Greeting").innerHTML = "How are you tonight?"; //display the statement how are you tonight?
    }
}

function my_Statement() {                                                       //declaring my own if statement
    var x = 1000                                                                //declaring variable x being 1000
    if (x == 1000) {                                                           //if x is equal to 1000 then-----
        document.getElementById("my_if_statement").innerHTML = "True";         //print true
    }
}

function if_Statement() {                                                       //declaring a function
    var first_Name = document.getElementById("first_Name").value;               //declaring a variable to take data from the input and setting to first_Name
    if (first_Name == "Steve") {                                                //comparing first name to "Steve"
        document.getElementById("message").innerHTML = "You are Steve!";        //if it's "Steve" then say you are steve
    }
    else {
        document.getElementById("message").innerHTML = "You are not Steve!";    //if it's anything ELSE then say you are not steve. 
    }
}

function Time_function() {                                                      //declaring a function to display tme of day
    var Time = new Date().getHours();                                           //getting the time (hours)
    var Reply;                                                                  //declaring an empty variable to set later
    if (Time < 12 == Time > 0) {                                                //if time less than 12 (true or false) is equal to time greater than 0 (true or false) then--
        Reply = "It is morning time!"                                           //set reply to it is morning!
    }
    else if (Time >= 12 == Time < 18) {                                         //if time is greater than or equal to twelve (true or false) is the same thing as time less than 18 (true or false) then -----
        Reply = "It is afternoon.";                                             //set reply to it is afernoon
    }
    else {                                                                      //if any other time then---
        Reply = "It is evening time."                                           //set reply to it being evening time
    }
    document.getElementById("Time_of_day").innerHTML = Reply;                   //display the reply set in either the if, else if, or the else statement in the paragraph with the id Time_of_day
}   