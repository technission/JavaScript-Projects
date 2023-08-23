var num = 23;                           //declare a variable
document.write(typeof num);             //display out the type of data stored in the variable

document.write("10" + num);             //display out type coercion

function my_Function() {                                    //declare a function
    document.getElementById("Test").innerHTML = 0/0         //this will display NaN for not a number
}

document.write(isNaN('This is a string'));                  //this will display true because it is not a number
document.write(isNaN('007'));                               //this will display false because it is a number

document.write(2E310);                                      //this will display infinity
document.write(-3E310);                                     //this will display negative infinity

document.write(10 > 2);                                     //this will display true because 10 is greater than 2
document.write(10 < 2);                                     //this will display false because 10 is not less than 2

console.log(2 + 2);                                         //this will display 4 in the console if you hit f12 on the browser
console.log(10 > 15);                                        //this will display false in the console

document.write(12 == 13);                                   //this will display false because 12 is not equal to 13
document.write(12 == 12);                                   //this will display true because 12 is equal to 12

x = 12;                                                     //declaring 3 variables here to represent data types and values for comparison using ===
y = "text";
z = "12";
document.write(x === 12);                                  //this will display true because x is the same data type, it is also the same value of 12
document.write(x === y);                                   //this will display false because its a different data type and a different value
document.write(x === z);                                   //this will display false even though the values are the same because the data types are different
document.write(y === z);                                   //this will display false because even though the data types are the same the values are different

document.write(4 > 2 && 2 < 4);                            //true because both statements are true
document.write(4 < 2 && 2 > 4);                           //false because one statement is false
document.write(4 > 2 || 2 > 4);                            //true because one statement is true
document.write(4 < 2 || 2 > 4);                           //false because one both statements are false
document.write(!(20 > 10));                               //false because 20 is greater than 10 and we are comparing it with the not !
document.write(!(20 < 10));                               //true because 20 is greater than 10 and we are comapring it with the not !
document.write(y + x);                                    //this will display the combination of the string assigned to y and the number assigned to x