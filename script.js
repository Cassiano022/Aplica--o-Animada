let list = document.querySelectorAll(".item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let count = list.length;
let active = 0; // Índice do item ativo inicial (primeiro item)

next.onclick = () => {
    let activeOld = document.querySelector(".active");
    activeOld.classList.remove("active");

    // Incrementa o índice do item ativo e retorna ao primeiro se ultrapassar o último
    active = active >= count - 1 ? 0 : active + 1;

    // Adiciona a classe 'active' ao próximo item
    list[active].classList.add("active");
};

prev.onclick = () => {
    let activeOld = document.querySelector(".active");
    activeOld.classList.remove("active");

    // Decrementa o índice do item ativo e retorna ao último se for menor que zero
    active = active <= 0 ? count - 1 : active - 1;

    // Adiciona a classe 'active' ao item anterior
    list[active].classList.add("active");
};

