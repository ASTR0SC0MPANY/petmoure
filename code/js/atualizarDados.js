function atualizarDados() {
    const disciplina = {
        nome: document.getElementById("nome").value,
        nota1: parseFloat(document.getElementById("nota1").value),
        nota2: parseFloat(document.getElementById("nota2").value)
    };

    firebase.firestore()
        .collection('disciplinas')
        .doc('gab')
        .update(disciplina)
        .then(resultado => {
            console.log(resultado);
        })
        .catch(error => {
            console.log(error);
        });
}
