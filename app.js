const screenNum = document.getElementById('screen-num')
const allClear = document.getElementById('all-clear')
const del = document.getElementById('del')
const equals = document.getElementById('equals') 
const plus = document.getElementById('plus')

const num = document.getElementsByClassName('num')


allClear.addEventListener('click', function () {
    screenNum.innerText = ''
})