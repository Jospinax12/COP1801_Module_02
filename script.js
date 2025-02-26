// JavaScript Program: Variable Demonstration

// 1. Ask user for their first name and store it in Fname
let Fname = prompt("Please enter your first name:");

// 2. Display a welcome message with the user's name
alert(`Hello ${Fname}, welcome to our JavaScript demo!`);

// 3. Create constant piValue
const piValue = 3.1415926;

// 4. Ask user for their favorite number and convert it to a number
let myFavNum = parseFloat(prompt("What is your favorite number?"));

// 5. Check if the user entered a valid number
if (!isNaN(myFavNum)) {
    // 6. Calculate the area of a circle using the user's favorite number as the radius
    let myArea = piValue * Math.pow(myFavNum, 2);

    // 7. Create the output message
    let message = `
        Hello ${Fname}, you entered ${myFavNum} as your favorite number. 
        If that was the radius of a circle, the circle's area would be ${myArea.toFixed(2)}.
        <br><br>
        <strong>Details:</strong>
        <ul>
            <li><strong>Your Name:</strong> ${Fname}</li>
            <li><strong>Favorite Number:</strong> ${myFavNum}</li>
            <li><strong>Value of Pi:</strong> ${piValue}</li>
            <li><strong>Calculated Circle Area:</strong> ${myArea.toFixed(2)}</li>
        </ul>
    `;

    // 8. Display the message on the webpage
    document.getElementById("output").innerHTML = message;
} else {
    // 9. Show an error if the input was not a number
    document.getElementById("output").innerHTML = "Please refresh the page and enter a valid number.";
}
