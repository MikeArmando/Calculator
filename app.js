const screenNum = document.getElementById('screen-num')
const allClear = document.getElementById('all-clear')
let num = document.getElementById('num')

allClear.addEventListener('click', function () {
    screenNum.innerText = ''
})