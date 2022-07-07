/* alert("Testing the alert command");

console.log("Testing the console.log command"); */

/* ********************************
Lesson 4 - working with the DOM 
********************************* */

// console.log ( document.getElementById("blue_box").innerHTML );

// document.getElementById("blue_box").innerHTML = "<h1>Testing</h1>";

// console.log ( document.getElementById("blue_box").innerHTML = "<h1>Testing</h1>" );

/* ********************************
Lesson 5 - Variables
********************************* */

// var user_name = "Leon"

// document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";

/* ********************************
Lesson 6 - dataTypes - strings
********************************* */

/* var firstName = "Leon";
console.log(firstName.length);
console.log(firstName[3]);

var url = "https://www.google.com";
console.log(url.replace("https://" , " ")); */

/* ********************************
Lesson 7 - dataTypes - numbers
********************************* */

/* var num1 = 7;
var num2 = 3;
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 - num2);

console.log(Math.pow(2,4));
console.log(Math.round(3.5));
console.log(Math.ceil(4.1));
console.log(Math.floor(6.9));
console.log(Math.sqrt(36));

console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.round(Math.random()*100)); */

/* ********************************
Lesson 8 - dataTypes - booleans
********************************* */

var value = 200
console.log(value < 100);
console.log(value > 100);
console.log(value <= 200);
console.log(value >= 201);

var password = "1234a"
var confirmPassword = "123a"

console.log(password == confirmPassword);

var financeValue = 800

if (financeValue >= 1000) {
    console.log("You are elegible for finance options");
} else
    console.log("You do not qualify for finance");