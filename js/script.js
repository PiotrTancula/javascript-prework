{
    function playGame(playerInput) {

        clearMessages()

        function getMoveName(argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            } else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
            }
        }

        function displayResult(argComputerMove, argPlayerMove) {
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

            if (argComputerMove == "kamień" && argPlayerMove == "papier") {
                printMessage('Ty wygrywasz');
            }
            else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
                printMessage('Komputer wygrywa');
            }
            else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
                printMessage('Jest remis');
            }
            else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
                printMessage('Komputer wygrywa');
            }
            else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
                printMessage('Ty wygrywasz');
            }
            else if (argComputerMove == "papier" && argPlayerMove == "papier") {
                printMessage('Jest remis');
            }
            else if (computerMove == "nożyce" && argPlayerMove == "papier") {
                printMessage('Komputer wygrywa');
            }
            else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
                printMessage('Ty wygrywasz');
            }
            else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
                printMessage('jest remis');
            }
            else if (argPlayerMove = 'nieznany ruch') {
                printMessage('trzeba wybrać z liczb 1,2,3');
            }
        }

        let randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        let computerMove = getMoveName(randomNumber);

        // if(randomNumber == 1){
        //   computerMove = 'kamień';
        // }
        // else if (randomNumber == 2) {
        //     computerMove = 'papier';
        // }
        // else if (randomNumber == 3) {
        //     computerMove = 'nożyce';
        // }

        printMessage('Mój ruch to: ' + computerMove);

        // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

        console.log('Gracz wpisał: ' + playerInput);

        let playerMove = getMoveName(playerInput);

        // if(playerInput == '1'){
        //   playerMove = 'kamień';
        // }

        // else if(playerInput == "2") {
        //     playerMove = "papier";
        // }

        // else if (playerInput == "3") {
        //     playerMove = "nożyce";
        // }

        printMessage('Twój ruch to: ' + playerMove);

        displayResult(computerMove, playerMove);

        // if (computerMove == "kamień" && playerMove == "papier") {
        //     printMessage('Ty wygrywasz');
        // }
        // else if (computerMove == "kamień" && playerMove == "nożyce") {
        //     printMessage('Komputer wygrywa');
        // }
        // else if (computerMove == "kamień" && playerMove == "kamień") {
        //     printMessage('Jest remis');
        // }
        // else if (computerMove == "papier" && playerMove == "kamień") {
        //     printMessage('Komputer wygrywa');
        // }
        // else if (computerMove == "papier" && playerMove == "nożyce") {
        //     printMessage('Ty wygrywasz');
        // }
        // else if (computerMove == "papier" && playerMove == "papier") {
        //     printMessage('Jest remis');
        // }
        // else if (computerMove == "nożyce" && playerMove == "papier") {
        //     printMessage('Komputer wygrywa');
        // }
        // else if (computerMove == "nożyce" && playerMove == "kamień") {
        //     printMessage('Ty wygrywasz');
        // }
        // else if (computerMove == "nożyce" && playerMove == "nożyce") {
        //     printMessage('jest remis');
        // }
        // else if (playerMove = 'nieznany ruch') {
        //     printMessage('trzeba wybrać z liczb 1,2,3');
        // }

    }

    const rockButton = document.getElementById('play-rock');
    const paperButton = document.getElementById('play-paper');
    const scissorsButton = document.getElementById('play-scissors');

    rockButton.addEventListener('click', function () {
        playGame(1);
    })

    paperButton.addEventListener('click', function () {
        playGame(2);
    })

    scissorsButton.addEventListener('click', function () {
        playGame(3);
    })
}

