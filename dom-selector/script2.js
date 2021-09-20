// //document.querySelector() -> elemet

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // const p = document.querySelector('p');
// // p.innerHTML = 'Ini dubah melalui javascript'

// //document.querySelectorAll()

// const p = document.querySelectorAll('p');
// // p[1].style.backgroundColor = 'lightblue';

// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

//Change node root
const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];

p4.style.backgroundColor = 'orange';