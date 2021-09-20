//DOM Manipulation Method (node)

//Buat element baru
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Paragraf Baru');

//Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);

//Simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//Simpan liBaru

const liBaru = document.createElement('li');
const teksLi = document.createTextNode('Item Dawam');

liBaru.appendChild(teksLi);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

//removeChild
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//replaceChild
const sectionB = document.getElementById('b');
const p4 = document.querySelector('section#b p')

const h2Baru = document.createElement('h2');
const textH2 = document.createTextNode('Test');

h2Baru.appendChild(textH2);

sectionB.replaceChild(h2Baru, p4);