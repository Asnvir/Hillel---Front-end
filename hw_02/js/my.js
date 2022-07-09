const CURRENT_YEAR = 2022;

const name = prompt("Enter you name.");
const lastName = prompt("Enter your lastname.");
const birthYear = Number(prompt("Enter your birth year."));
const age = CURRENT_YEAR - birthYear;

if (name) {
    document.getElementById("name").innerHTML = "Name: " + name;
} else {
    document.getElementById("name").innerHTML = "You need reenter your name.";
}

if (lastName) {
    document.getElementById("lastName").innerHTML = "Last name: " + lastName;
} else {
    document.getElementById("lastName").innerHTML = "You need reenter your last name.";
}

if (birthYear) {
    document.getElementById("age").innerHTML = "Age: " + age;
} else {
    document.getElementById("age").innerHTML = "You need reenter your birth year";
}
