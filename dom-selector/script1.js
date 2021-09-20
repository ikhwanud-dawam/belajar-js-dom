// DOM Selection
// document.getElementById() -> element

const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Dawam';

//document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'blue';

}
p[1].style.color = 'red';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLCollection

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML - 'Ini diubah dari JS';

//