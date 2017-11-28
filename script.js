const display = document.querySelector('.display');
const evalBtn = document.querySelector('.eval');
const clearBtn = document.querySelector('.clear');
let buttons = document.querySelectorAll('.valueBtn');

for(let i of buttons){
	i.addEventListener('click', function () {
		display.value += i.value;	
	})
};
function showEval() {
	display.value = eval(display.value);
}

function clearDisplay() {
	display.value = ' ';
}
evalBtn.addEventListener('click', showEval);
clearBtn.addEventListener('click', clearDisplay);