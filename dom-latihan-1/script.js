const button = document.getElementById('btn1');

button.addEventListener('click', function () {
    // const body = document.getElementsByTagName('body')[0];
    // document.body.setAttribute('class', 'light-blue');
    document.body.classList.toggle('light-blue');

    // const divNew = document.createElement('div');
    // const divNewText = document.createTextNode('New Div');

    // divNew.appendChild(divNewText);
    // body.appendChild(divNew);
});

const newBtn = document.createElement('button');
const newTextBtn = document.createTextNode('Acak Warna');

newBtn.appendChild(newTextBtn);
newBtn.setAttribute('type', 'button');
button.after(newBtn);

newBtn.addEventListener('click', function () {
    const r = Math.ceil(Math.random() * (255 - 1) + 1);
    const g = Math.ceil(Math.random() * (255 - 1) + 1);
    const b = Math.ceil(Math.random() * (255 - 1) + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

})

const rRed = document.querySelector('input[name="rRed"]');
const rGreen = document.querySelector('input[name="rGreen"]');
const rBlue = document.querySelector('input[name="rBlue"]');
rRed.addEventListener('input', function () {
    const r = rRed.value
    const g = rGreen.value
    const b = rBlue.value
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
rGreen.addEventListener('input', function () {
    const r = rRed.value
    const g = rGreen.value
    const b = rBlue.value
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
rBlue.addEventListener('input', function () {
    const r = rRed.value
    const g = rGreen.value
    const b = rBlue.value
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})

document.body.addEventListener('mousemove', function (e) {
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',' + 100 + ')';
})