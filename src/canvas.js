import {init, updateObjects, clickOn, isIn, canvas, context} from './initialisation.js'

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}
var focused = null;
var selected = null;
var mooving = null;

const diffClickWidgetAndPosition = {
  x: 0,
  y: 0
}

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY

    if(mooving){
      // console.log("try to move a widget")
      mooving.x = mouse.x + diffClickWidgetAndPosition.x
      mooving.y = mouse.y + diffClickWidgetAndPosition.y
      updateObjects()
    }
    else{ // nothing mooving
      var widget = isIn(mouse.x, mouse.y)
      if((widget && (focused == null)) || ((widget == null) && focused)){

        if(focused){ // remove focus attr
          focused.focus = false
        }
        focused = widget
        if(focused){ // add focus to the new one
          focused.focus = true
        }
        updateObjects()
      }
    }

})
addEventListener('mousedown', event => {
    var x = event.clientX
    var y = event.clientY

    mooving = isIn(x,y)
    if(mooving){
      diffClickWidgetAndPosition.x = mooving.x - x
      diffClickWidgetAndPosition.y = mooving.y - y
    }
    updateObjects()
})
addEventListener('mouseup', event => {
    var x = event.clientX
    var y = event.clientY
    selected = mooving
    mooving = null
    updateObjects()
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    updateObjects()
})

addEventListener('contextmenu', event => {
    event.preventDefault()
    var x = event.clientX
    var y = event.clientY

    var widget = isIn(x,y)
    if(widget){
      // console.log("right click on '"+widget.name+"'")
      widget.rightClick(x,y)
    }
    else{
      console.log("right click on blank")
    }
    updateObjects()
})

init()
updateObjects()
