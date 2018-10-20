var dodger = document.getElementById('dodger')
var speed = 1

function moveDodgerLeft(){
  var leftNum = dodger.style.left.replace('px','')
  var left = parseInt(leftNum, 10)
  if (left > 0){
    if (left > speed){
      dodger.style.left = `${left-speed}px`
    } else {
      dodger.style.left = `0px`
    }
  }      
}

document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowLeft'){
    moveDodgerLeft()
	}
})
