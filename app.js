function bdUsuarios(){
    let datosUsuarios = JSON.parse(localStorage.getItem("datosUsuariosLs"));
    if(datosUsuarios == null){
        datosUsuarios =
        [
            ["mali","mali123","200", "mali.jpg"],
            ["meli","meli123","290", "meli.jpg" ],
            ["mili","mili123","67", "mili.jpg"],
        ]
    }
    return datosUsuarios;
}

function usuarioDatos(usuario , contraseña){
    let datosUsuarios = bdUsuarios();
    var acceso = false;

    datosUsuarios.forEach(element => {
        if(usuario == element[0] && contraseña == element[1]){
            acceso = true
            sessionStorage.setItem("usuarioActivo", element[0]);
            sessionStorage.setItem("saldoUsuario",element[2]);
            sessionStorage.setItem("fotoUsuario",element[3]);
        }
    });

    return acceso;

}

document.querySelector("#btnLogin").addEventListener('click', login);

function login(){
    var user = document.querySelector("#usuarioTxt").value;
    var pass = document.querySelector("#contraseñaTxt").value;
    var acceso = false;

    acceso = usuarioDatos(user,pass);

    if(acceso == true) entrar();
    else alert("USUARIO O CONTRASEÑA INVALIDOS!!")
}

function entrar(){
    window.open("usuarios.html");
    //window.location.href = ("usuarios.html")
    document.getElementById("formulario").reset();
}