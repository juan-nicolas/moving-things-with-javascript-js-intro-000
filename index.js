var dodger = document.getElementById('dodger')
var speed = 1

function moveDodgerLeft(){
  var leftNum = dodger.style.left.replace('px','')
  var left = parseInt(leftNum, 10)

  dodger.style.left = `${left-speed}px`
}

document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowLeft'){
    moveDodgerLeft()
	}
})
