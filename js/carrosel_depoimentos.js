const depoimentos = document.querySelectorAll('.depoimento-card');

let indice = 0;

function trocarDepoimento() {

    depoimentos[indice].classList.remove('active');

    indice++;

    if (indice >= depoimentos.length) {
        indice = 0;
    }

    depoimentos[indice].classList.add('active');
}

setInterval(trocarDepoimento, 6000);

