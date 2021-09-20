const container = document.querySelector('.container');
const imBig = document.querySelector('.img-bg');
// const imBig = container.firstChild.nextSibling;
const imSm = document.querySelectorAll('.sm1,.sm2,.sm3,.sm4,.sm5,.sm6');

container.addEventListener('click', function (e) {
    if (e.target.className == 'img sm1' || e.target.className == 'img sm2' || e.target.className == 'img sm3' || e.target.className == 'img sm4' || e.target.className == 'img sm5' || e.target.className == 'img sm6') {
        imBig.src = e.target.src;
        imBig.classList.add('fade');
        setTimeout(function () {
            imBig.classList.remove('fade');
        }, 500);
        imSm.forEach(function (e) {
            if (e.classList.contains('active')) {
                e.classList.remove('active');
            }
        })
        e.target.classList.add('active');
    }

})