//Week 9 - Asteroid Avoidance "Shell" Build

//set up starting elements (necessary)
//these are GLOBAL values and will be accessible to EVERY fucntion in the file!
var c = document.querySelector('canvas') //grabs element type instead of ID

//var c = document.getElementById("#canvas")
var context = c.getContext("2d")
var timer = requestAnimationFrame(main)
var gravity = 1
var asteroids = new Array()
var numAsteroids = 10
var gameOver = true
var score = 0


var gameStates = []
var currentState = 0
var ship


//random value generator function
function randomRange(high, low) {

    return Math.random() * (high - low) + low

}//randomRange() CLOSE

//function/Class for the Asteroids!
function Asteroid() {

    this.radius = randomRange(2, 10)
    this.x = randomRange(c.width - this.radius, 0 + this.radius) + c.width
    this.y = randomRange(c.height - this.radius, 0 + this.radius) //- c.height
    this.vx = randomRange(-5, -10) //horizontal velocity
    this.vy = randomRange(10, 5) //vertical velocity
    this.color = "orange"

    this.draw = function () {
        context.save()
        context.beginPath()
        context.fillStyle = this.color
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
        context.closePath()
        context.fill()
        context.restore()
    }

}//Asteroids() CLOSE


function gameStart() {
    //for loop to make LOTS OF ASTEROIDS
    for(var i = 0; i < numAsteroids; i++){
        //i is the INDEX of the Array, this is a LOOP that runs while i is less than the value stored to numAsteroids, i++ means i grows +1 each time through the loop


        asteroids[i] = new Asteroid()
        //each time through the loop, a new asteroid is created and saved in the asteroid array!

        //create the instance of the ship for the game
        ship = new PlayerShip()

    }
}//gameStart() CLOSE

//function for the PLAYER'S SHIP
function PlayerShip() {

    this.x = c.width / 2
    this.y = c.height / 2

    this.w = 20 //width
    this.h = 20 //height

    this.vx = 0
    this.vy = 0

    this.up = false
    this.down = false
    this.left = false
    this.right = false

    this.flamelength = 30

    //DRAW THE SHIP AND FLAME
    this.draw = function() {
        context.save()
        context.translate(this.x, this.y)
        
        //flame for the ship!
        if(this.up == true) {
            context.save()
            //adjust flame length for the flicker effect
            if(this.flamelength == 30) {
                this.flamelength = 10
            }
            else {
                this.flamelength = 30
            }

            context.fillStyle = "orange" //flame color
            context.beginPath()
            context.moveTo(0, this.flamelength)
            context.lineTo(5, 5)
            context.lineTo(-5, 5)
            context.lineTo(0, this.flamelength)
            context.closePath()
            context.fill()
            context.restore()
        }

        context.beginPath()

        context.fillStyle = "blue"
        context.moveTo(0, -13)
        context.lineTo(10, 10)
        context.lineTo(-10, 10)
        context.lineTo(0, -13)
        context.closePath()
        context.fill()
        context.restore()
    }

    this.move = function () {
        this.x += this.vx
        this.y += this.vy
        
        /*//Game over state if you don't stay in the screen
        if(this.y > c.height) {
            gameOver = true
            currentState = 2
        }*/
        
        //adding boundaries to keep ship on screen
        //checks to see if we are past the bottom of the screen
        if(this.y > c.height - 20) {
            this.y = c.height - 20
            this.vy = 0
        }

        //checks to see if we are past the top of the canvas
        if(this.y < 0 + 13) {
            this.y = 13
            this.vy = 0
        }

        //checks to see if we are past right or left side of canavs
        //right
        if(this.x > c.width - 10) {
            this.x = c.width - 10
            this.vx = 0
        }
        
        //left
        if(this.x < 0 + 10) {
            this.x = 10
            this.vx = 0
        }
    }

}//PlayerShip() CLOSE

//create the instance of the ship for the game
//var ship = new PlayerShip()

document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)

//functions for the controls
function keyPressDown(e) {

    //console.log("Key Down" + e.keycode) //tells you the keycodes!
    if(e.keyCode === 38) {
        ship.up = true
    }
    if(e.keyCode === 37) {
        ship.left = true
    }
    if(e.keyCode === 39) {
        ship.right = true
    }
    //not coding for down because ship don't go that way

}//keyPressDown() CLOSE

function keyPressUp(e) {

    //console.log("Key Up" + e.keycode) //tells you the keycodes!

    if(gameOver == false){
        if(e.keyCode === 38) {
            ship.up = false
        }
        if(e.keyCode === 37) {
            ship.left = false
        }
        if(e.keyCode === 39) {
            ship.right = false
        }
        //not coding for down because ship don't go that way
    }

    if(gameOver == true) {

        if(e.keyCode === 13) { //enter key!

            if(currentState == 2) {
                score = 0
                numAsteroids = 10
                asteroids = []
                gameStart()

                currentState = 0
            }

            else {

                gameStart()
                gameOver = false
                currentState = 1
                setTimeout(scoreTimer, 1000)
            }

        }
    }

}//keyPressUp() CLOSE

//GAME STATES for START MENU, GAMEPLAY, and GAME OVER

gameStates[0] = function() {//START SCREEN
    context.save()
    context.font = "30px Arial"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("Asteroid Avoidance", c.width/2, c.height/2 - 30)
    context.font = "15px Arial"
    context.fillText("Press ENTER to Start!", c.width/2, c.height/2 + 30)
    context.restore()
}

gameStates[1] = function() {//GAMEPLAY STATE

    //paste code from main() for gameplay
    //display score
    context.save()

    context.font = "15px Arial" //make your own letter!
    context.fillStyle = "white"
    context.fillText("Score: " + score.toString(), c.width - 150, 30)
    context.restore()

    //W9D2 show... gravity stuff ---------------------------

    if(ship.up == true){
        ship.vy = -10
    }
    else {
        ship.vy = 3
    }

    if(ship.left == true){
        ship.vx = -3
    }
    else if(ship.right == true){
        ship.vx = 3
    }
    else{
        ship.vx = 0
    }


    for(var i = 0; i < asteroids.length; i++) {
        //using the distance formula to find the distance between ship and asteroid
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var dist = Math.sqrt((dX*dX) + (dY*dY))

        //check for collision and if so end game
        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))) {
            //console.log("secret stuff for W9D2")
            gameOver = true
            currentState = 2 //this replaces removeEventListener need

            //document.removeEventListener("keydown", keyPressDown)
            //document.removeEventListener("keyup", keyPressUp)
        }

        //checks to see if asteroids is offscreen
        if(asteroids[i].x > c.width + asteroids[i].radius) {
            //reset astroids position
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius) //- c.height
            asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius) + c.width
        }

        if(gameOver == false) {
            asteroids[i].x += asteroids[i].vx
        }
        asteroids[i].draw()
    }

    ship.draw()
    if(gameOver == false) {
        ship.move()
    }

    while(asteroids.length < numAsteroids) {
        //add a new asteroid to the array!
        asteroids.push(new Asteroid())
    }


}

gameStates[2] = function() {//GAME OVER STATE
    context.save()
    context.font = "30px Arial"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("GAME OVER Your score was: " + score.toString(), c.width/2, c.height/2 - 30)
    context.font = "15px Arial"
    context.fillText("Press ENTER to Play Again!", c.width/2, c.height/2 + 30)
    context.restore()

}

//the main function! this makes it all happen!
function main() {

    context.clearRect(0, 0, c.width, c.height)

    /*
        where original gameplay code was
    */

    gameStates[currentState]() //allows screen to follow the appropiate state

    timer = requestAnimationFrame(main)

}//main() CLOSE

function scoreTimer() {
    if(gameOver == false) {
        score++ //adds +1 to the game score on screen
        if(score % 5 == 0) {//if score / 5 has a remainder of 0

            numAsteroids += 5 //add MORE asteroids (level up!)
            console.log(numAsteroids)
        }
        setTimeout(scoreTimer, 1000)
    }

}//scoreTimer() CLOSE

//scoreTimer()

function detectCollision(distance, calcDistance) {
    return distance < calcDistance //will return TRUE or FALSE value
}
