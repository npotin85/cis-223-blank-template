function setup() {

}


function draw () {
    
}

function submitText() {
    // met requirement to press the button
    var user_text = document.getElementById('input_element').value;
    alert('Hello ' + user_text);
}

function getHelp() {
    // I created a prompt that's required
    var user_prompt_input = prompt("What do you need help with")
    alert("Sorry, I cannot help you with " + user_prompt_input)
}

function guessThenumber() {
    // 
    var number = Math.floor(Math.random() * 5 + 1)
    var guessed_correctly = false
    do { 
        // 
        var user_guess = prompt ("Pick a number between 1 and 5")
        // A message to the user saying they won
        if (user_guess == number) {
            alert("Congrats! You win!")
            guessed_correctly = true
        }
        else {
            // A message to the user saying they got the wrong answer
            alert("Wrong! Try again!")
        }

    }
    while (guessed_correctly == false)
}


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    // Display mouse coordinates
    textSize(16);
    text(`MouseX: ${mouseX}, MouseY: ${mouseY}`, 10, 20);
}


let x = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    // Draw ellipse horizontally based on mouse position
    ellipse(x, mouseY, 50, 50);
    x += (mouseX - x) * 0.1;
}

let data = [100, 200, 150, 300];

function setup() {
    // The circle is moving when the mouse is interacting with the square
    createCanvas(400, 400);
    let barWidth = width / data.length;
    for (let i = 0; i < data.length; i++) {
        let x = i * barWidth;
        let y = height - data[i];
        rect(x, y, barWidth - 1, data[i]);
    }
}
