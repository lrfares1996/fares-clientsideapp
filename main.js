// Initilaization
function multiply(x, y, z) {return x * y * z; }

window.addEventListener('load', (event) => {
    if (localStorage.getItem('user'))
        {
            document.querySelector('user').value = localStorage.getItem ('user');
        };
    if (localStorage.getItem('num1'))
        {
            document.querySelector('#height').value = parseInt(localStorage.num1);
        };
    if (localStorage.getItem('num2'))
        {
            document.querySelector('#length').value = parseInt(localStorage.num2);
        };
    if (localStorage.getItem('num3'))
        {
            document.querySelector('#width').value = parseInt(localStorage.num3);
        };
});
// Initialization END

// Event Listeners
document.querySelector('#volumeBtn').addEventListener('click', () => {
    const counterStart = parseInt(localStorage.getItem('clickCount')) || 0;
    const name = parseInt(document.querySelector('#user').value);
    const x = parseInt(document.querySelector('#num1').value);
    const y = parseInt(document.querySelector('#num2').value);
    const z = parseInt(document.querySelector('#num3').value);
    const addClick = counterStart +1;
    const response = `${name}, your volume is ${multiply(x, y, z)}. This script has been run a total of ${addClick} times.`;
    document.querySelector('#result').innerHTML = response;
    
    localStorage.setItem('clickCount', addClick);
    localStorage.setItem('user', name);
    localStorage.setItem('num1', x);
    localStorage.setItem('num2', y);
    localStorage.setItem('num3', z);
})

document.querySelector('#clearBtn').addEventListener('click', () => {
    localStorage.removeItem('clickCount');
    localStorage.removeItem('user');
    localStorage.removeItem('num1');
    localStorage.removeItem('num2');
    localStorage.removeItem('num3');
});