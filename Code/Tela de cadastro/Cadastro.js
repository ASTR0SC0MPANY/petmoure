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

