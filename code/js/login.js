function Login(){
    var email = document.getElementById("email-login").value
    var senha = document.getElementById("senha-login").value
    firebase.initializeApp(firebaseConfig);
    firebase.auth().signInWithEmailAndPassword(email,senha).then(response => {
        window.location.href="homepage.html";
    }).catch(error => {
        alert('Senha errada!')
    });
}