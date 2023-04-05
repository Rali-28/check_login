// Asks the user for Username
let userName = prompt("Username");

// * Conditionals to check for the user input and renders respective outputs

// Runs if user pressed cancel or left the input empty
if (userName == null || userInput == false) {
    alert("Cancelled");
}

// Runs if user input is ADMIN
/**
 * Converts all user input letters to uppercase
 * user can disregard letter case as long as "admin" is the input
 * removes case sensitivity
 */
else if (userName.toUpperCase() == "ADMIN") {
    // * Conditionals that checks for the correct password after correct username was put in
}

// Runs if user has entered the wrong input != ADMIN
else {
    alert("I don't know you!");
}
