/**
 * En este archivo se desarrolla la lógica del login, para ingresar al lobby del juego
 */ 
let btn2 = document.getElementById('login');
btn2.onclick = login;

// Función para ingresar al juego por medio de un usuario registrado anterioremente
async function login() {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const data = {
        user: user,
        password: password
    }
    try {
        //Petición para enviar los jugadores logeados a la base de datos
        await axios.post('http://localhost:3000/lobby', data);
        window.location='./lobby.html';
    } catch(e) {  
        window.alert('El usuario no existe')
        console.log(e); 
    }
}
