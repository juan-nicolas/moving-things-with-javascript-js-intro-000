console.log('hello?')

var dodger = document.getElementById('dodger')

document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowLeft'){
    var leftNum = dodger.style.left.replace('px','')
    var left = parseInt(leftNum, 10)
		console.log(leftNum)
		console.log(left)

		dodger.style.left = `${left-1}px`
	}
})
