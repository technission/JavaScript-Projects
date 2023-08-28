function Ride_Function() {                                                  //declaring a function to determine if a rider can ride based on height
    var Height, Can_ride;                                                   //declaring a variable with two values
    Height = document.getElementById("Height").value;                       //setting height to equal the value inputed from the html input
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";   //setting Can_ride equal to a string based on the height being less than 52
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";     //adding a string with the Can ride varible to the final output
}

function Voter_eligibility() {                                                  //declaring a function to determine if a voter can vote based on age
    var age, can_vote;                                                          //declaring a variable with two values
    age = document.getElementById("age").value;                                 //setting age equal to the input from the html
    can_vote = (age < 18) ? "You are too young":"You are old enough";           //setting can_vote equal to a string based on the age being less than 18
    document.getElementById("vote").innerHTML = can_vote + " to vote.";         //adding a string with the can_vote varible to the final output
}




function Vehicle (Make, Model, Year, Color) {                                    //defining a function creating an object contructor
    this.Vehicle_Make = Make;                                                   //this method which means the value of "this" is the object that possesses the function
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                          //assigning the first vehicle in the function above basically replacing "this" with a name
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");         //assigning the second vehicle in the function above
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");                       //assigning the third vehicle in the function above

function myFunction() {                                                         //declaring a function to output information about Erik
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function House(Year_Built, Color, Stories) {                                    //created a constructor
    this.House_Year_Built = Year_Built;
    this.House_Color = Color;
    this.House_Stories = Stories;
} 

var Colonial = new House(1967, "Brown", 3);                                     //used the new method to create object within the constructor
var SplitLevel = new House(1942, "White", 2);
var Mansion = new House(2023, "Yellow", 6);

function second_function() {                                                    //declared a function here to display the pieces of data using concatenation
    document.getElementById("New_and_This").innerHTML = 
    "There are 3 houses on the market. The first one is the colonial which was built in: " + Colonial.House_Year_Built + " it is colored " + Colonial.House_Color +
    " and it is " + Colonial.House_Stories + " stories tall." +
    "The second one is the split level which was built in: " + SplitLevel.House_Year_Built + " it is colored " + SplitLevel.House_Color +
    " and it is " + SplitLevel.House_Stories + " stories tall." +
    "The last one is the mansion which was built in: " + Mansion.House_Year_Built + " it is colored " + Mansion.House_Color +
    " and it is " + Mansion.House_Stories + " stories tall."
}

//var abstract = "hi"                                                             //demonstrating what happens when you use keywords that are reserved for assigning variables
//window.alert(abstract);                                                         //it seems like it makes abstract lose it's original purpose/meaning
    
function nested() {                                                                 //declaring a nested function
    document.getElementById("Nested_Function").innerHTML = Count();                 //pointing the getelementbyid method to a new function declaring within the nested() function
    function Count() {
        var x = 10;                                                                 //declare a starting integer for the value of x
        function add_one() {x += 2;}                                                //declaring a function add_one() and then telling it what do. Please note while there may be math in the text here on this line the function must be called before anything is done to x. 
        add_one();                                                                  //this is where we call the function to add 2 to the value of x
        return x;                                                                    //displaying the result of the function inside the nested() function 
    }
}