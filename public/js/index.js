const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//logar no sistema
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checksession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    console.log("Email digitado:", email);
    console.log("Conta encontrada:", account);

    if(!account) {
        alert("Opps! Verifique o usuário ou a senha.");
        return;
    }

    if(account) {
        if(account.password !== password) {
            alert("Opps! Verifique o usuário ou a senha.");
            return;
        }

        saveSession(email, checksession);
        
        window.location.href = "home.html";
    }

});

//criar conta
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();


    console.log("Entrou na função de enviar!");

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if (email.length < 5) {
        alert("Preencha o campo com um e-mail válido.");
        return;
    }

    if (password.length < 4) {
        alert("A senha deve ter no mínimo 4 caracteres.");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });
    myModal.hide();

    alert("Conta criada com sucesso!");

});


function checkLogged(){
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }


    if(logged){
        saveSession(logged, session)

        window.location.href = "home.html";
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }

    return "";
}