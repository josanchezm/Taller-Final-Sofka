/**
 * Este archivo contiene la lógica de registro de los usuarios en la base de datos de Mongo
 */
let btn = document.getElementById('signup');
btn.onclick = register;

// Registro de usuarios en Mongo y MySQL
async function register()  {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    const data = {
        user: user,
        password: password,
    };

    try{
        // Registro del usuario en Mongo
        await axios.post('http://localhost:3000/register', data);
        //Registro del usuario en MySQL
        await axios.post('http://localhost:8080/user', data);
        window.location="./index.html"
      }catch(err){    
        console.log(err); 
    }
}




