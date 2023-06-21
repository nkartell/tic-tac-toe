(console.log('1.реализован интерфейс игры +5\n 2.В футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n 2.При кликах по игровому полю по очереди отображаются крестики и нолики. Первая фигура всегда крестик +10\n 3.Игра завершается, когда три фигуры выстроились в ряд по вертикали, горизонтали или диагонали +10\n4.По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения +10\n5.Звуки игры +10\n Оценка: 50 баллов.'));


const gameArea = document.querySelector('.game-area');

const winnerTitle = document.querySelector('.winner-title');  //content wrapper 

const modalWindow = document.querySelector('.wrapper-modal-window'); // modal result

const buttonClose = document.querySelector('.button-close');

const numbersOfMoves = document.querySelector('.numbersOfMoves');

const audio = document.querySelector('.audio');

const audioVictory = document.querySelector('.audio-victory');

let winner = '';  //кто победил : крестики или нолики

let move = 0; //сейчас никто не ходит, но при изменении переменной узнаем, ходят крестики или нолики

gameArea.addEventListener('click', event => {
    if (event.target.className = 'box') {   //усли кликнули в пределах игровой зоны
        move % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = '0';
        audio.play();
        move += 1;
        check();
    }

    numbersOfMoves.innerHTML = `${move} moves`;
});


const check = () => {
    const boxes = document.querySelectorAll('.box');

    const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [3, 5, 7]]; //комбинации для выйгрыша по индексу

    for (let i = 0; i < arr.length; i++) {

        if (boxes[arr[i][0]].innerHTML === 'X' && boxes[arr[i][1]].innerHTML === 'X' && boxes[arr[i][2]].innerHTML === 'X') {
            winner = 'crosses!';
            audioVictory.play();
            makeResult(winner);

        } else if (boxes[arr[i][0]].innerHTML === '0' && boxes[arr[i][1]].innerHTML === '0' && boxes[arr[i][2]].innerHTML === '0') {
            winner = 'zeros!';
            audioVictory.play();
            makeResult(winner);
        }
    }
}

const makeResult = winnerResult => {
    winnerTitle.innerHTML = `Winner is ${winnerResult}`;
    modalWindow.style.display = 'block';
}

const closeModalWindow = () => {
    modalWindow.style.display = 'none';
    location.reload();
}

buttonClose.addEventListener('click', closeModalWindow);
