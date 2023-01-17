/**
 * En este archivo se encuentra la lógica de inicio de la partida de Bingo
 */
let btn5 = document.getElementById('startGame');
btn5.onclick = startGame;

// Creando el juego en MySQL para empezar a jugar
async function  startGame(){
   
    const loadingGame =  document.getElementById('loadGame');
    
    loadingGame.innerText = JSON.stringify("Sala de espera. La partida empezará en breve");
        try{    
            const respuesta = await axios.post('http://localhost:8080/game');           
        }catch(err){          
            console.log(err);      
        }
     
    setInterval(function()  { 
     window.location='./bingoGame.html';
    },  1000 * 30);
}

async function login() {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    alert(user);
}
