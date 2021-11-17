var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var template = new Image()
template.src = "images/shapes.png"

template.onload = function () {

    ctx.drawImage(template, 0, 0, 800, 800)

    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "black"
    ctx.lineWidth = "5"

    ctx.fillRect(85, 302, 100, 100)
    ctx.strokeRect(85, 302, 100, 100)



    ctx.strokeStyle = "rgb(255, 0 ,0)"

    ctx.moveTo(85, 682)
    ctx.lineTo(278, 549)
    ctx.stroke()



    ctx.fillStyle = "#ffff00"
    ctx.strokeStyle = "red"

    ctx.beginPath()
    //context.Object.arc(x, y, radius, startAngle, endAngle, isCounterClockwise)
    ctx.arc(385, 441, 68, 0, (2 * Math.PI), false)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()



    ctx.fillStyle = "#ff00ff"
    ctx.strokeStyle = "#00ffff"

    ctx.beginPath()
    ctx.moveTo(557, 308)
    ctx.lineTo(667, 284)
    ctx.lineTo(724, 380)
    ctx.lineTo(651, 464)
    ctx.lineTo(548, 420)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()



    ctx.fillStyle = "#ffff00"
    ctx.strokeStyle = "#rgb(32, 32, 32)"

    ctx.beginPath()
    ctx.moveTo(635, 496)
    ctx.lineTo(667, 553)
    ctx.lineTo(733, 567)
    ctx.lineTo(688, 615)
    ctx.lineTo(696, 681)
    ctx.lineTo(635, 653)
    ctx.lineTo(575, 681)
    ctx.lineTo(583, 615)
    ctx.lineTo(537, 567)
    ctx.lineTo(603, 554)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
}