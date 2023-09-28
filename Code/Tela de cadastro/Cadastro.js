
var rollV, nameV, genderV;

function Cadastrar(){

    rollV = document.getElementById("email").value;
    nameV = document.getElementById("nome").value;
    genderV = document.getElementById("password").value;
    console.log(rollV,nameV,genderV)

    document.getElementById("cadastra").onclick = function(){
    Cadastrar();
    
    firebase
    .database()
    .ref("student/" + rollV)
    .set({
            rollNo: rollV,
            name: nameV,
            gender: genderV,
        });
    console.log("deu certo")
    document.getElementById("email").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("password").value = ""; 
    }

}

/* Script para criar uma nova conta de usuário no Firebase */

function Cadastro() {
    const firebaseConfig = {
        apiKey: "SUA_API_KEY",
        authDomain: "SEU_DOMÍNIO.firebaseapp.com",
        projectId: "SEU_PROJECT_ID",
        storageBucket: "SEU_STORAGE_BUCKET",
        messagingSenderId: "SEU_MESSAGING_SENDER_ID",
        appId: "SEU_APP_ID",
        measurementId: "SUA_MEDIDA_ID"
    };

    var user = document.getElementById("email").value;
    var senha = document.getElementById("password").value;
    firebase.initializeApp(firebaseConfig);

    // Cria um novo usuário com email e senha
    firebase.auth().createUserWithEmailAndPassword(user, senha)
        .then(response => {
            // Sucesso ao criar a conta
            console.log("Conta criada com sucesso:", response);
            // Redirecione para a página de login ou outra página apropriada
            window.location.href = "../Login/Login.html";
        })
        .catch(error => {
            // Trate os erros ao criar a conta
            console.error("Erro ao criar conta:", error);
            alert("Ocorreu um erro ao criar a conta. Por favor, tente novamente.");
        });
}
