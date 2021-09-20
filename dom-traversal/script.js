const silang = document.querySelectorAll('span.close');

// silang.addEventListener('click', function () {
//     const parent = document.querySelector('.container');
//     const hapus = document.querySelector('.card');
//     parent.removeChild(hapus);
// });

for (let i = 0; i < silang.length; i++) {
    silang[i].addEventListener('click', function (e) {
        // const parent = document.querySelector('.container');
        // const hapus = document.querySelector('.card');
        // parent.removeChild(hapus);

        //ANOTHER

        // silang[i].parentElement.style.display = 'none';

        //ANOTHER

        e.target.parentElement.style.display = 'none';
    });
}

silang.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
    })
})

//nextSibling, dll