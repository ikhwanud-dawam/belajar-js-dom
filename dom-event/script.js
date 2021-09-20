// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;

const p1 = document.querySelector('.p1');

p1.addEventListener('click', function () {
    const ulMain = document.querySelector('section#b ul');;
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('li baru');

    liBaru.appendChild(teksLiBaru);
    ulMain.appendChild(liBaru);
});

p1.addEventListener('mouseenter', function () {
    p1.style.backgroundColor = 'lightblue';
});

p1.addEventListener('mouseleave', function () {
    p1.style.backgroundColor = 'white';
});