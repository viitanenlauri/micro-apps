let input = []        // Array to store user's input numbers
let random = []       // Array to store randomly generated numbers
let weeks = 0         // Counter for the number of weeks (52 weeks in a year)
let highest = 0       // Variable to keep track of the highest number of correct guesses

function main() {
    // Call the functions to save guesses and validate them
    saveGuess()
    // Check if the user wants to log the game or just track correct guesses
    if (process.argv[9] === "log") { // If user wants to log the game
        while (highest < 7) { // Loop until 7 correct guesses
            highest = 0
            printInput()
            console.log(randomNum())
            Leprechaun()
        }
        weeks = weeks / 52 // Convert weeks to years
        console.log("It took " + Math.floor(weeks) + " years!")
    } else {
        let oldhighest = highest
        while (highest < 7) { // Loop until 7 correct guesses
            highest = 0
            randomNum()
            Leprechaun()
            if (oldhighest < highest) { // Keep track of the highest number of correct guesses
                console.log("You got " + highest + " correct")
                oldhighest = highest // Update the highest number of correct guesses
            }
        }
        weeks = weeks / 52 // Convert weeks to years
        console.log("It took " + Math.floor(weeks) + " years!")
    }
}

function saveGuess() {  // Save user input and validate it
    if (process.argv.length === 9 || (process.argv.length === 10 && process.argv[9] === "log")) {
        for (i = 2; i < 9; i++) {
            let number = parseInt(process.argv[i]) // Convert input to integer
            if (number < 10 && !isNaN(number) && !input.includes(number)) {
                input.push(0 + number) // Add numbers in '00' format
            } else if (number >= 10 && number < 41 && !isNaN(number) && !input.includes(number)) {
                input.push(number)
            } else {
                console.log("error: Only numbers between 1-40, number only once")
                process.exit(1) // Exit if input is invalid
            }
        }
    } else {
        console.log("error: Type seven numbers and 'log'(optional) to lotto")
        process.exit(1) // Exit if the number of arguments is incorrect
    }
}

function printInput() { // Print user input in the desired format
    let output = "User:   "
    for (i = 0; i < input.length; i++) {
        if (input[i] < 10) {
            output = output + 0 + input[i] + " "
        } else if (input[i] >= 10 && input[i] < 41) {
            output = output + input[i] + " "
        }
    }
    console.log(output)
}

function randomNum() { // Generate seven random numbers and return them as a formatted string
    let output = "Random: "
    random = []
    while (random.length < 7) {
        let num = Math.floor(Math.random() * 40) + 1 // Generate a number between 1 and 40
        if (num < 10 && !random.includes(num)) { // If the number is less than 10 and not already included
            random.push(num)
            output = output + 0 + num + " "
        } else if (num > 10 && num < 41 && !random.includes(num)) {
            random.push(num)
            output = output + num + " "
        }
    }
    return output
}

function Leprechaun() { // Check the lottery numbers
    for (i = 0; i < 7; i++) { // Check each number in the user's input
        if (random.includes(input[i])) { // If the number is in the random numbers
            highest = highest + 1 // Increment the count of correct guesses
        }
    }
    weeks = weeks + 1 // Increment the week counter
}

main()
