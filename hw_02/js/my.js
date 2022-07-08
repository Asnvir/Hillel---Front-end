const CURRENT_YEAR = 2022;

let name = prompt("Enter you name.");
let lastName = prompt("Enter your lastname.");
let birthYear = Number(prompt("Enter your birth year."));
let age = CURRENT_YEAR - birthYear;

if (name !== null && name !== "") {
    document.getElementById("name").innerHTML = "Name: " + name;
}else {
    document.getElementById("name").innerHTML = "You need reenter your name.";
}
if (lastName !== null && lastName !== "") {
    document.getElementById("lastName").innerHTML = "Last name: " + lastName;
}else{
    document.getElementById("lastName").innerHTML = "You need reenter your last name.";
}
if (birthYear !== null && age !== 2022) {
    document.getElementById("age").innerHTML = "Age: " + age;
}else{
    document.getElementById("age").innerHTML = "You need reenter your birth year";
}
