function my_dictionary() {                                                          //declared a function to define a dictionary
    var student = {                                                                 //student is going to be the dictionary
        FirstName:"Steve",                                                          //these are the properties of the dictionary or KVPs
        LastName:"Thornton",
        Age:"36",
        Sex:"Male"
    }
    //document.getElementById("dictionary").innerHTML = student.FirstName;            //this will output the first name only
    delete student.Sex;                                                               //delete the key for sex
    document.getElementById("dictionary").innerHTML = student.Sex;
}