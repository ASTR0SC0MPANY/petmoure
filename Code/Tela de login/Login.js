/*O Script abaixo possui a função de fazer a autenticação para login de usuário
Com o usuário cadastrado no servidor do firebase, o script teria a função de reconhecer
o que foi escrito no formulário(input) que pede os e-mails e senhas. Depois do usuário ter
escrito, o firebase faria o reconhecimento e, se estivesse certo, o usuário seria redirecionado
para outra página.
*/
function Login(){

    const firebaseConfig = {
        apiKey: "AIzaSyBiB8WoYkQpXiM9Sb8a4_ib3bDgCviV3oc",
        authDomain: "loginconta-c1eeb.firebaseapp.com",
        projectId: "loginconta-c1eeb",
        storageBucket: "loginconta-c1eeb.appspot.com",
        messagingSenderId: "944235075691",
        appId: "1:944235075691:web:7d2c7e126554c45844f92e",
        measurementId: "G-MZ548XJ760"
      };

    var user = document.getElementById("email").value
    var senha = document.getElementById("password").value
    firebase.initializeApp(firebaseConfig);
    firebase.auth().signInWithEmailAndPassword(user,senha).then(response => {
    //console.log(response);
        window.location.href="../Home/Home.html";
        console.log("que beleza")
    }).catch(error => {
        alert('se lascou')
    });
    }
