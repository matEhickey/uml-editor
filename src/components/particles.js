import utils from './../utils'
import {Entity} from './../entity'

// Objects
class Particles extends Entity{
  constructor(x, y, radius, color) {
    // super(x, y)
    super(x,y)
    this.radius = radius
    this.color = color
  }

  draw(c) {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = this.color
      c.fill()
      c.closePath()
  }

  update(context) {
    this.x += utils.randomIntFromRange(-5, 5)
    this.y += utils.randomIntFromRange(-5, 5)

    this.draw(context)
  }
}

module.exports = {Particles}
