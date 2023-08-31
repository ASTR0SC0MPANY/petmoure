function Login(){
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response=> {
        console.log("daora")
        window.location.href = "../Home/Home.html"
    }).catch(error=>{
        alert("error", error)
    })
}
