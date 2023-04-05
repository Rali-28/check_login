// Asks the user for Username
let userInput = prompt("Username");

// * Conditionals to check for the user input and renders respective outputs

// Runs if user pressed cancel or left the input empty
if (userInput == null || userInput == false) {
    alert("Cancelled");
}

// Runs if user input is ADMIN (case sensitive)
else if (userInput == "ADMIN") {
    alert("Welcome");
}

// Runs if user has entered the wrong input != ADMIN
else {
    alert("I don't know you!");
}
