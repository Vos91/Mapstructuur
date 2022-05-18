function openFilterGroep(element) {
    element.parentElement.classList.toggle("open");
}

function meerOpties(element) {
    element.parentElement.classList.add("opties-open");
}

function minderOpties(element) {
    element.parentElement.classList.remove("opties-open");
}

(function() {
    const parent = document.querySelector('.range-slider');

    if (!parent) {
        return;
    }

    const rangeS = parent.querySelectorAll('input[type="range"]'),
          numberS = parent.querySelectorAll('input[type="number"]');

    rangeS.forEach((el) => {
        el.oninput = () => {
            let slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach((el) => {
        el.oninput = () => {
            let number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                let tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;
        }
    });
})();

document.getElementById("open-filter").onclick = function() {openFilter()};
document.getElementById("filter-close").onclick = function() {closeFilter()};

function openFilter() {
    document.getElementById("filter").classList.add('open');
}
function closeFilter() {
    document.getElementById("filter").classList.remove('open');
}