import {Entity} from "./../entity"

class PackageD extends Entity{
  constructor(name){
    super(PackageD.N*100 + 300, 100 + PackageD.N*100 + 200)
    this.name = name
    PackageD.N += 1
    this.width = 300
    this.length = 25 + 50
  }

  draw(c){
    c.beginPath()
    c.fillStyle = "#000"
    c.fill()

    // show title
    var x = this.x
    var y = this.y
    var len = 25
    c.rect(x, y, this.width, len)

    c.fillText("Package: '"+this.name+"'", this.x + 5, this.y + 15)

    // draw content
    y += len
    len = 50
    c.rect(x, y, this.width, len)

    if(this.focus){
      c.strokeStyle="#0000FF"
    }

    c.stroke()
    c.strokeStyle="#000000"
    c.closePath()

  }

}

PackageD.N = 0

module.exports = {PackageD}
