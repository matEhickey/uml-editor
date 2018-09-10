class Menus {
  constructor(){
    this.options = []
    this.displayed = false;
    this.x = 0;
    this.y = 0;
  }

  show(x, y){
    this.displayed = true;
    this.x = x;
    this.y = y;
  }

  hide(){
    this.displayed = false;
  }

  update(context){
    this.draw(context)
  }

  draw(c){
    c.beginPath()

    if(this.displayed){
      console.log("drawing menus")

      c.fillStyle = "white";
      var optLen = this.options.length;
      c.fillRect(this.x, this.y , 100, 20*optLen)

      c.fillStyle = "grey";
      c.strokeStyle = "grey";

      var i = 0;
      for( let option of this.options) {
        c.rect(this.x, this.y+20*i, 100, 20)
        c.fillText(option, this.x + 5, this.y + 20*i + 15)
        i+=1;
      }
    }
    c.stroke()
    c.closePath()

    c.fillStyle = "black";
    c.strokeStyle = "black";
  }

  addOption(option){
    this.options.push(option)
  }

  raz(){
    this.options = [];
  }
}

var menus;

function getMenus(){
  if(!menus){
    menus = new Menus()
  }
  return(menus)
}

module.exports = {getMenus}
