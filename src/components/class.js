import {Entity} from "./../entity"
import {getMenus} from "./../menus/menus"

class ClassD extends Entity{
  constructor(name){
    super(ClassD.N*100 + 400, ClassD.N*100 + 100)
    this.name = name

    this.props = []
    this.methods = []

    this.width = 100
    this.length = this.props.length+1 * 25 + this.methods.length+1 * 25

    ClassD.N += 1
  }

  draw(c){
    c.beginPath()

    // show title
    var x = this.x
    var y = this.y
    var len = 25

    c.rect(x, y, this.width, len)
    // c.fillStyle = "#040"
    // c.fill()

    // c.fillStyle = "#000"
    c.fillText("Class: '"+this.name+"'", this.x + 5, this.y + 15)


    // draw vars
    y += len
    var numberOfProps = this.props.length + 1 // 1 more for debug
    len = 25 * numberOfProps

    c.rect(x, y, this.width, len)
    // c.fillStyle = "#040"
    // c.fill()

    // c.fillStyle = "#000"
    c.fillText("-  "+this.props.length+" props", x+5, y+15)

    // draw methods
    y += len
    var numberOfMethods = this.methods.length + 1 // 1 more for debug
    len = 25 * numberOfMethods
    c.rect(x, y, this.width, len)
    c.fillText("# "+this.methods.length+" methods", x+5, y+15)

    this.length = 25 + numberOfProps*25 + numberOfMethods*25

    if(this.focus){
      c.strokeStyle="#0000FF"
    }

    c.stroke()
    c.strokeStyle="#000000"
    c.closePath()

  }

  rightClick(x,y){
    console.log("right_click on a class")
    var menus = getMenus()
    // console.log(menus)
    menus.raz()
    
    menus.addOption("Add property")
    menus.addOption("Add method")
    menus.addOption("Modify name")

    menus.show(x,y)
  }

}

ClassD.N = 0

module.exports = {ClassD}
