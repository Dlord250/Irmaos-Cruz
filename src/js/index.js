function menuShow() {
    let menucabecalho = document.querySelector('.mobile-cabecalho');

    if (menucabecalho.classList.contains('open')){
        menucabecalho.classList.remove('open');
        document.querySelector('.icone').src = 'src/img/menu_white_36dp.svg'
    } else {
        menucabecalho.classList.add('open');
        document.querySelector('.icone').src = 'src/img/close_white_36dp.svg';
    }
}

function Show() {
    let menucabecalho = document.querySelector('.mobile-cabecalho2');

    if (menucabecalho.classList.contains('open')){
        menucabecalho.classList.remove('open');
        document.querySelector('.icone').src = 'src/img/menu_white_36dp.svg'
    } else {
        menucabecalho.classList.add('open');
        document.querySelector('.icone').src = 'src/img/close_white_36dp.svg';
    }
}