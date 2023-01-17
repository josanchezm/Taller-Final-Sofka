/**
 * En este archivo implementamos la lógica para entregar el respectivo cartón de Bingo a los usuarios
 */

// Obtener el cartón asignado para el usuario
let btn4 = document.getElementById('bingoCard');
btn4.onclick = getCard;

// Determinar ganador
let btnWinner = document.getElementById('btnWinner');
btnWinner.onclick = getWinner;

// Array que representa el cartón del usuario para saber si fue el ganador
let winnerCard = [];

// Array en el que se almacenarán las bingoBallas
let array = [];

// Booleano para determinar el ganador
let userWinner = false;

// Variable donde se almacenarán las letras del bingo
let letter = "";

// Variable que almacena la concatenación de letra y número
let letterNumber;

// Variables que representan cada una de las posiciones del cartón
let counterB;
let counterI;
let counterN;
let counterG;
let counterO;

let counterB2;
let counterI2;
let counterN2;
let counterG2;
let counterO2;

let counterB3;
let counterI3;
let counterN3;
let counterG3;
let counterO3;

let counterB4;
let counterI4;
let counterN4;
let counterG4;
let counterO4;

let counterB5;
let counterI5;
let counterN5;
let counterG5;
let counterO5;

// Declarando todos los valores posibles que se encuentran en la balotera
let possValues = [];

for (let i = 1; i <= 76; i++) {
    possValues.push(i);
}

// Función que representa la balotera, retorna cada 5 segundos una nueva balota
setInterval(function () {
    // Sacando un valor al azar de la balotera
    let ball = possValues[Math.floor(Math.random()*possValues.length)];
    console.log(ball);
    
    // Asignando la letra en función del número obtenido
    if (ball >= 1 && ball <= 15) {
        letter = "B";
    }
    if (ball >= 16 && ball <= 30) {
        letter = "I";
    }
    if (ball >= 31 && ball <= 45) {
        letter = "N";
    }
    if (ball >= 46 && ball <= 60) {
        letter = "G";
    }
    if (ball >= 60 && ball <= 75) {
        letter = "O";
    }

    // Removiendo la balota sacada de la balotera, de modo que no se repita
    const index = possValues.indexOf(ball);
    if (index > -1 && ball != 76) {
        possValues.splice(index, 1);
    }
    console.log(possValues.length);

    // Mostrando los números que arroja la balotera
    if(ball != 76) {
        const bingoBall = document.getElementById('bingoBall');
        bingoBall.innerText = `${letter} ${JSON.stringify(ball)}`;
        letterNumber = `[${letter} ${ball}]`;
        
        const bingoBallwinner = document.getElementById('bingoBallw');
        bingoBallwinner.innerText = `${bingoBallwinner.innerText}  ${JSON.stringify(letterNumber)}`;
    }
    console.log(possValues);

    return getBall(ball);
}, 1000 * 3)

// Obtener el cartón de bingo, llenado con números al azar 
async function getCard() {
    btn4.style.backgroundColor = 'gray';
    btn4.disabled = true;

    let B = [];
    let I = [];
    let N = [];
    let G = [];
    let O = [];

    // Bucles para asignar los numeros al azar para cada letra del Bingo
    for (let i = 0; i < 5; i++) {
        B[i] = Math.round(Math.random() * (1 - 15) + 15);
    }

    for (let j = 0; j < B.length; j++) {
        for (let k = 0; k < B.length; k++) {
            if (k != j && B[j] == B[k]) {
                B[k] = Math.round(Math.random() * (1 - 15) + 15);
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        I[i] = Math.round(Math.random() * (16 - 30) + 30);
    }

    for (let j = 0; j < I.length; j++) {
        for (let k = 0; k < I.length; k++) {
            if (k != j && I[j] == I[k]) {
                I[k] = Math.round(Math.random() * (16 - 30) + 30);
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        N[i] = Math.round(Math.random() * (31 - 45) + 45);
    }

    for (let j = 0; j < N.length; j++) {
        for (let k = 0; k < N.length; k++) {
            if (k != j && N[j] == N[k]) {
                N[k] = Math.round(Math.random() * (31 - 45) + 45);
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        G[i] = Math.round(Math.random() * (46 - 60) + 60);
    }

    for (let j = 0; j < G.length; j++) {
        for (let k = 0; k < G.length; k++) {
            if (k != j && G[j] == G[k]) {
                G[k] = Math.round(Math.random() * (46 - 60) + 60);
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        O[i] = Math.round(Math.random() * (61 - 75) + 75);
    }

    for (let j = 0; j < O.length; j++) {
        for (let k = 0; k < B.length; k++) {
            if (k != j && O[j] == O[k]) {
                O[k] = Math.round(Math.random() * (61 - 75) + 75);
            }
        }
    }

    // Asignación de las posiciones del cartón
    const B1 = document.getElementById('bingoBallB');
    const I1 = document.getElementById('bingoBallI');
    const N1 = document.getElementById('bingoBallN');
    const G1 = document.getElementById('bingoBallG');
    const O1 = document.getElementById('bingoBallO');

    B1.innerText = JSON.stringify(B[0]);
    I1.innerText = JSON.stringify(I[0]);
    N1.innerText = JSON.stringify(N[0]);
    G1.innerText = JSON.stringify(G[0]);
    O1.innerText = JSON.stringify(O[0]);

    const B2 = document.getElementById('bingoBallB2');
    const I2 = document.getElementById('bingoBallI2');
    const N2 = document.getElementById('bingoBallN2');
    const G2 = document.getElementById('bingoBallG2');
    const O2 = document.getElementById('bingoBallO2');

    B2.innerText = JSON.stringify(B[1]);
    I2.innerText = JSON.stringify(I[1]);
    N2.innerText = JSON.stringify(N[1]);
    G2.innerText = JSON.stringify(G[1]);
    O2.innerText = JSON.stringify(O[1]);

    const B3 = document.getElementById('bingoBallB3');
    const I3 = document.getElementById('bingoBallI3');
    const N3 = document.getElementById('bingoBallN3');
    const G3 = document.getElementById('bingoBallG3');
    const O3 = document.getElementById('bingoBallO3');

    B3.innerText = JSON.stringify(B[2]);
    I3.innerText = JSON.stringify(I[2]);
    N3.innerText = 'X';
    G3.innerText = JSON.stringify(G[2]);
    O3.innerText = JSON.stringify(O[2]);

    const B4 = document.getElementById('bingoBallB4');
    const I4 = document.getElementById('bingoBallI4');
    const N4 = document.getElementById('bingoBallN4');
    const G4 = document.getElementById('bingoBallG4');
    const O4 = document.getElementById('bingoBallO4');

    B4.innerText = JSON.stringify(B[3]);
    I4.innerText = JSON.stringify(I[3]);
    N4.innerText = JSON.stringify(N[3]);
    G4.innerText = JSON.stringify(G[3]);
    O4.innerText = JSON.stringify(O[3]);

    const B5 = document.getElementById('bingoBallB5');
    const I5 = document.getElementById('bingoBallI5');
    const N5 = document.getElementById('bingoBallN5');
    const G5 = document.getElementById('bingoBallG5');
    const O5 = document.getElementById('bingoBallO5');

    B5.innerText = JSON.stringify(B[4]);
    I5.innerText = JSON.stringify(I[4]);
    N5.innerText = JSON.stringify(N[4]);
    G5.innerText = JSON.stringify(G[4]);
    O5.innerText = JSON.stringify(O[4]);

    // LLenado del cartón
    winnerCard.push(
        B[0], I[0], N[0], G[0], O[0],
        B[1], I[1], N[1], G[1], O[1],
        B[2], I[2], N[2], G[2], O[2],
        B[3], I[3], N[3], G[3], O[3],
        B[4], I[4], N[4], G[4], O[4]
    );
}

// Función que captura la balota que arroja el sistema
async function getBall(ball) {
    //Inyección en DB de MySQL
    await axios.post('http://localhost:8080/ball', ball);

    // Llenado del array con los numeros que arroja la balotera, siempre y cuando estos no hayan sido arrojados antes
    if (ball != 76) {
        array.push(ball);
    } 

    //Retornando el array para hacer comparaciones de ganador
    return getFullCard(array);
}

// Función para comparar los números del tarjetón con los arrojados por la balotera
async function getFullCard(array) {
    for (let j = 0; j < array.length; j++) {
        for (let k = 0; k < array.length; k++) {
            if (winnerCard[0] == array[k]) {
                counterB = 1;       
            }
            if (winnerCard[1] == array[k]) {
                counterI = 1;
            }
            if (winnerCard[2] == array[k]) {
                counterN = 1;
            }
            if (winnerCard[3] == array[k]) {
                counterG = 1;
            }
            if (winnerCard[4] == array[k]) {
                counterO = 1;
            }

            if (winnerCard[5] == array[k]) {
                counterB2 = 1;
            }
            if (winnerCard[6] == array[k]) {
                counterI2 = 1;
            }
            if (winnerCard[7] == array[k]) {
                counterN2 = 1;
            }
            if (winnerCard[8] == array[k]) {
                counterG2 = 1;
            }
            if (winnerCard[9] == array[k]) {
                counterO2 = 1;
            }


            //FILA 3 DE TODAS LAS COLUMNAS

            if (winnerCard[10] == array[k]) {
                counterB3 = 1;
            }
            if (winnerCard[11] == array[k]) {
                counterI3 = 1;
            }
            if (winnerCard[13] == array[k]) {
                counterG3 = 1;
            }
            if (winnerCard[14] == array[k]) {
                counterO3 = 1;
            }

            //FILA 4 DE TODAS LAS COLUMNAS

            if (winnerCard[15] == array[k]) {
                counterB4 = 1;
            }
            if (winnerCard[16] == array[k]) {
                counterI4 = 1;
            }
            if (winnerCard[17] == array[k]) {
                counterN4 = 1;
            }
            if (winnerCard[18] == array[k]) {
                counterG4 = 1;
            }
            if (winnerCard[19] == array[k]) {
                counterO4 = 1;
            }


            //FILA 5 DE TODAS LAS COLUMNAS
            if (winnerCard[20] == array[k]) {
                counterB5 = 1;
            }
            if (winnerCard[21] == array[k]) {
                counterI5 = 1;
            }
            if (winnerCard[22] == array[k]) {
                counterN5 = 1;
            }
            if (winnerCard[23] == array[k]) {
                counterG5 = 1;
            }
            if (winnerCard[24] == array[k]) {
                counterO5 = 1;
            }
        }
    }

    // Condiciones de victoria de forma horizontal

    if (counterB == 1 && counterI == 1 && counterN == 1 && counterG == 1 && counterO == 1) {
        userWinner = true;
    }

    if (counterB2 == 1 && counterI2 == 1 && counterN2 == 1 && counterG2 == 1 && counterO2 == 1) {
        userWinner = true;
    }

    if (counterB3 == 1 && counterI3 == 1 && counterN3 == 1 && counterG3 == 1 && counterO3 == 1) {
        userWinner = true;
    }

    if (counterB4 == 1 && counterI4 == 1 && counterN4 == 1 && counterG4 == 1 && counterO4 == 1) {
        userWinner = true;       
    }

    if (counterB5 == 1 && counterI5 == 1 && counterN5 == 1 && counterG5 == 1 && counterO5 == 1) {
        userWinner = true;       
    }

    //Condiciones de victoria de forma vertical

    if (counterB == 1 && counterB2 == 1 && counterB3 == 1 && counterB4 == 1 && counterB5 == 1) {
        userWinner = true;
    }
    if (counterI == 1 && counterI2 == 1 && counterI3 == 1 && counterI4 == 1 && counterI5 == 1) {
        userWinner = true;        
    }
    if (counterN == 1 && counterN2 == 1 && counterN4 == 1 && counterN5 == 1) {
        userWinner = true;   
    }
    if (counterG == 1 && counterG2 == 1 && counterG3 == 1 && counterG4 == 1 && counterG5 == 1) {
        userWinner = true;        
    }
    if (counterO == 1 && counterO2 == 1 && counterO3 == 1 && counterO4 == 1 && counterO5 == 1) {
        userWinner = true;        
    }

    //Condiciones de victoria en cruz

    if (counterB5 == 1 && counterI4 == 1 && counterN3 == 1 && counterG2 == 1 && counterO == 1) {
        userWinner = true;   
    }

    if (counterB == 1 && counterI2 == 1 && counterN3 == 1 && counterG4 == 1 && counterO5 == 1) {
        userWinner = true;     
    }

    //Condición de victoria: cuatro puntas

    if (counterB == 1 && counterB5 == 1 && counterO5 == 1 && counterO == 1) {
        userWinner = true;
    }
}

// Determinar ganador
async function getWinner() {
    if (userWinner) {
        window.alert(`Has ganado!`);
        setInterval(function () {
        window.location="./winner.html";
        },1000 * 3);
    } else {
        window.alert("Cantaste Bingo sin haber ganado, quedas descalificado!");
        setInterval(function () {
            window.location = './index.html';
        }, 1000 * 3);
    }
}