//JS file that runs the gam nd connects the functionality of ship.js and controls.js to the HTML

var canvas
var context

//variable for the animation timer
var timer

var ship //the ship!

var friction //slows down velocity

//function to ready the canvas and starting position of the ship
$(document).ready(function(e) {

    //assign the canvas element to the canvas var
    canvas = $("#canvas")//JQuery version of document.getElementById("#canvas")
    context = canvas.get(0).getContext("2d")

    ship = new Ship() //Ship() was defined in ship.js

    //friction and POWER
    friction = 0.95
    ship.power = 2
    timer = setInterval("animate();", 33) //33 milliseconds (1000 would be 1 second)


})//end of ready()

//LET'S DO STUFF!
function animate() {

    context.clearRect(0, 0, canvas.width(), canvas.height())

    //check to see if the keyCode values are up or down [connects to the controls.js]
    if(up) { //if the current value of 'up' is true

        //when up key is TRUE (which means we are pressing the key down)
        ship.vy -= ship.ax * ship.power
        //ine 39 same as: ship.vy = ship.vy - (ship.ax * ship.power)
        //ship's velocity of y axis is LOWERED by it's current acceleration and power

    }

    if(down) {//current vaue of 'right' is TRUE

        ship.vy += ship.ax * ship.power

    }

    if(right) {

        //add acceleration (moving towards the right!)
        ship.vx += ship.ax * ship.power
    }

    if(left) {

        //subtract acceleration
        ship.vx -= ship.ax * ship.power
    }

    //apply friction to the velocity -- realistic slow down, speed increases are never instant
    ship.vx *= friction
    ship.vy *= friction

    //move and redraw the ship! .functions() are from ship.js [Ship()]
    ship.move()
    ship.draw()

    //If ship leaves right side of canvas, returns to left side
    if(ship.x > canvas.width() + 25) {
        //if the current ship x coord is greater than the canvas

        //move ship x coord
        ship.x = -25
    }

    //If ship leaves bottom edge of canavs, returns at top
    if(ship.y > canvas.height() + 25) {
        //if the current ship y coord is greater than the canvas

        //move ship y coord
        ship.y = -25
    }

      //If ship leaves left side of canvas, returns to right side
      if(ship.x < 0 - 25) { //0 is the x coord of the left margin, 25 is the length of the ship
        //if the current ship x coord is greater than the canvas

        //move ship x coord
        ship.x = 825//800 is the x coord of the right canvas margin
    }

    //If ship leaves top side of canvas, returns to bottom side
    if(ship.y < 0 - 25) { //0 is the y coord of the left margin, 25 is the length of the ship
        //if the current ship y coord is greater than the canvas
    
        //move ship y coord
        ship.y = 825//800 is the y coord of the right canvas margin
    }


}//close of animate()