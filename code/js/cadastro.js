const firebaseConfig = {
    apiKey: "AIzaSyAujowRpx3xeEVz32tdCKx4dO-5wTCzFms",
    authDomain: "login-e-cadastro-f05c1.firebaseapp.com",
    projectId: "login-e-cadastro-f05c1",
    storageBucket: "login-e-cadastro-f05c1.appspot.com",
    messagingSenderId: "57945752541",
    appId: "1:57945752541:web:3ac30121203f7b28a6ec34",
    measurementId: "G-BRN8VS77FP"
};

  firebase.initializeApp(firebaseConfig);

  function adicionarUsuario() {
    const usuario = {
        nome: document.getElementById("nome-registro").value,
        email: document.getElementById("email-registro").value,
        senha: document.getElementById("senha-registro").value
    
    }

    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((userCredential) => {
            const user = userCredential.user;

            firebase.firestore()
                .collection('users')
                .doc(usuario.nome)
                .set(usuario)
            .then(() => {
                alert("seus dados foram cadastrados com sucesso");
                
            }).catch((error) => {
                alert("falha ao cadastrar")
            })

    }).catch((error) => {
        alert(error.message)
    })

  }