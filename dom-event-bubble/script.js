const container = document.querySelector('.container');

// silang.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//     })
// })

//PILIH CONTAINER DARI ELEMENT YANG INGIN DIPILIH DULU

container.addEventListener('click', function (e) {
    if (e.target.className == 'card') {
        alert('ok');
    }
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})