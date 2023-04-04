// Asks the user for Username
let userInput = prompt("Username");
// Converts user input to all Uppercase Letters
userInput = userInput.toUpperCase();

// * Conditionals to check for the user input and renders respective outputs
// Runs if user input is ADMIN (case sensitive)
if (userInput == "ADMIN") {
    alert("Welcome");
}
// Runs if user pressed cancel or left the input empty
else if (userInput == null || userInput == false) {
    alert("Cancelled");
}
// Runs if user has entered the wrong input != ADMIN
else {
    alert("I don't know you!");
}
