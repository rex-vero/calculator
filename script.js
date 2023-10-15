const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const num0 = document.getElementById('num0');
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const times = document.getElementById('times');
const dot = document.getElementById('dot');
const clear = document.getElementById('clear');
const result = document.getElementById('result');
const show = document.getElementById('show');
num1.addEventListener('click', () => { show.value += num1.innerText; })
num2.addEventListener('click', () => { show.value += num2.innerText; })
num3.addEventListener('click', () => { show.value += num3.innerText; })
num4.addEventListener('click', () => { show.value += num4.innerText; })
num5.addEventListener('click', () => { show.value += num5.innerText; })
num6.addEventListener('click', () => { show.value += num6.innerText; })
num7.addEventListener('click', () => { show.value += num7.innerText; })
num8.addEventListener('click', () => { show.value += num8.innerText; })
num9.addEventListener('click', () => { show.value += num9.innerText; })
num0.addEventListener('click', () => { show.value += num0.innerText; })
dot.addEventListener('click', () => { show.value += dot.innerText; })
add.addEventListener('click', () => { show.value += add.innerText; })
minus.addEventListener('click', () => { show.value += minus.innerText; })
divide.addEventListener('click', () => { show.value += '/'; })
times.addEventListener('click', () => { show.value += '*'; })
result.addEventListener('click', () => { show.value = eval(show.value) })
clear.addEventListener('click', () => { show.value = ''; })