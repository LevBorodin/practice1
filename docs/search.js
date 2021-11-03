document.querySelector('#searchline').oninput = function () {
    let val = this.value.trim();
    let searchitems = document.querySelectorAll('.content .filterDiv');
    if (val != '') {
        searchitems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        searchitems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}