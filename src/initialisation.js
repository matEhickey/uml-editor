import {Entity} from './entity'
import {ClassD} from './components/class'
import {Particles} from './components/particles'
import {PackageD} from './components/package'

let entities
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

function init() {
    entities = []
    // for (let i = 0; i < 20; i++) {
    //   entities.push(new Particles(canvas.width/2, canvas.height/2 , utils.randomIntFromRange(1,50), utils.randomColor()));
    // }

    for (let i = 0; i < 2; i++) {
        entities.push(new ClassD("class_"+i));
    }
    for (let i = 0; i < 2; i++) {
        entities.push(new PackageD("package_"+i));
    }
}

// Animation Loop
// function animate() {
//     requestAnimationFrame(animate)
//     updateObjects()
// }

var numberOfUpdating = 0
function updateObjects(){
  if(false){
    numberOfUpdating += 1
    console.log("updateObjects : "+numberOfUpdating)
  }

  context.clearRect(0, 0, canvas.width, canvas.height)
  entities.forEach(entity => {
   entity.update(context);
  });
}

function isIn(x,y){
  var res = null
  entities.forEach(entity => {
    if(entity.isIn(x,y)){
      res = entity
    }
  })
  return(res)
}

function clickOn(x,y){
  // console.log("clickOn ")
  entities.forEach(entity => {
    if(entity.isOn(x,y)){
      // console.log(entity)
      return(entity)
    }
  })
}

module.exports = {init, animate, updateObjects, clickOn, isIn, canvas, context}
