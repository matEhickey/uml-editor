import utils from './utils'


// Objects
class Entity{
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 0
    this.length = 0

    this.name = "entity"

    this.focused = false
  }

  draw(c) {
      c.beginPath()
      c.fillText('Entity', this.x, this.y)
      c.closePath()
  }

  update(context) {
    this.draw(context)
  }

  isIn(x,y){
    // console.log("entity("+this.name+").isOn "+"["+x+":"+y+"]")
    // console.log("x:"+this.x+" y:"+this.y)
    // console.log("width:"+this.width+" length:"+this.length)

    if(x > this.x && x < (this.x + this.width)){
      if(y > this.y && y < (this.y + this.length)){
        // console.log("true")
        return(true)
      }
    }
    // console.log("false")
    // console.log("\n")

    return(false)
  }
}

module.exports = {Entity}
