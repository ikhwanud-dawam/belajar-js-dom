function getCom() {
    const comp = Math.random()

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp <= 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}

function acakGambar() {
    const imgComp = document.querySelector('.img-komputer');
    const img = ['gajah', 'semut', 'orang'];
    let i = 0
    const waktuAwal = new Date().getTime();

    setInterval(function () {
        if (new Date().getTime() - waktuAwal > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + img[i++] + '.png');
        if (i == img.length) {
            i = 0;
        }
    }, 100);
}

const pGajah = document.getElementsByClassName('gajah')[0];
const pOrang = document.getElementsByClassName('orang')[0];
const pSemut = document.getElementsByClassName('semut')[0];

const pilCom = document.getElementsByClassName('img-komputer')[0];
const info = document.getElementsByClassName('info')[0];

const suitFix = document.querySelectorAll('li img');
suitFix.forEach(function (e) {
    e.addEventListener('click', function () {
        let comp = getCom();
        let player = e.className;
        let hasil = getHasil(comp, player);

        acakGambar()
        setTimeout(() => {
            pilCom.setAttribute('src', 'img/' + comp + '.png');

            info.innerHTML = hasil;
        }, 1000);
    })
});



//Skoring




// pGajah.addEventListener('click', function () {
//     let comp = getCom();
//     let player = pGajah.className;
//     let hasil = getHasil(comp, player);

//     pilCom.setAttribute('src', 'img/' + comp + '.png');

//     info.innerHTML = hasil;
// });
// pOrang.addEventListener('click', function () {
//     let comp = getCom();
//     let player = pOrang.className;
//     let hasil = getHasil(comp, player);

//     pilCom.setAttribute('src', 'img/' + comp + '.png');

//     info.innerHTML = hasil;
// });
// pSemut.addEventListener('click', function () {
//     let comp = getCom();
//     let player = pSemut.className;
//     let hasil = getHasil(comp, player);

//     pilCom.setAttribute('src', 'img/' + comp + '.png');

//     info.innerHTML = hasil;
// });