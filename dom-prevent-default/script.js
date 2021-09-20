const silang = document.querySelectorAll('.card a');

silang.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    })
})