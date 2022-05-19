let imagenPrincipal = document.getElementById("imagenUsuario")
let imagen = sessionStorage.getItem("fotoUsuario")

let nomUser = document.getElementById("aplicarUsuario")
let saldo = document.getElementById("saldoUsuario")
let saldoReal = sessionStorage.getItem("saldoUsuario")
let saldoIngresado = document.getElementById("saldoIngresado")
let saldoRetirado = document.getElementById("saldoRetirado")
let saldoNuevoIngreso = document.getElementById("saldoNuevo")
let saldoNuevoRetiro = document.getElementById("saldoNuevo1")

let displayInicio = document.getElementById("seccionInicio")
let displayConsulta = document.getElementById("seccionConsulta")
let displayIngreso = document.getElementById("seccionIngreso")
let displayRetiro = document.getElementById("seccionRetiro")

nomUser.textContent = sessionStorage.getItem("usuarioActivo")
imagenPrincipal.setAttribute("src",imagen)

document.getElementById("inicio").addEventListener("click",inicio)
document.getElementById("inicio1").addEventListener("click",inicio)
document.getElementById("inicio2").addEventListener("click",inicio)
document.getElementById("consultar").addEventListener("click",consultaSaldo)
document.getElementById("consultar1").addEventListener("click",consultaSaldo)
document.getElementById("consultar2").addEventListener("click",consultaSaldo)
document.getElementById("ingresar").addEventListener("click",ingresarMonto)
document.getElementById("ingresar1").addEventListener("click",ingresarMonto)
document.getElementById("ingresar2").addEventListener("click",ingresarMonto)
document.getElementById("retirar").addEventListener("click",retirarMonto)
document.getElementById("retirar1").addEventListener("click",retirarMonto)
document.getElementById("retirar2").addEventListener("click",retirarMonto)

 function inicio(){
    displayInicio.classList.replace("d-none","d-block")
    displayConsulta.classList.replace("d-block","d-none")
    displayIngreso.classList.replace("d-block","d-none")
    displayRetiro.classList.replace("d-block","d-none")
    imagenPrincipal.setAttribute("src",imagen)
    console.log(1)
 }
 
 function consultaSaldo(){
   saldoReal = sessionStorage.getItem("saldoUsuario")
    saldo.textContent = "$" + saldoReal
    displayInicio.classList.replace("d-block","d-none")
    displayConsulta.classList.replace("d-none","d-block")
    displayIngreso.classList.replace("d-block","d-none")
    displayRetiro.classList.replace("d-block","d-none")
    console.log(2)
    
 }

 function ingresarMonto(){
    
    displayInicio.classList.replace("d-block","d-none")
    displayConsulta.classList.replace("d-block","d-none")
    displayIngreso.classList.replace("d-none","d-block")
    displayRetiro.classList.replace("d-block","d-none")
    saldoIngresado.textContent = null
    saldoNuevoIngreso.textContent = null
    document.querySelector("#btnLogin").addEventListener('click', ingresarDinero);
    function ingresarDinero(){
      saldoReal = sessionStorage.getItem("saldoUsuario")
    let ingreso = document.querySelector("#ingresoMonto").value
    let nuevoSaldo = parseInt(saldoReal,10) + parseInt(ingreso,10)
    if(nuevoSaldo>990) alert("Lo sentimos, no puedes tener más de $990 en tu cuenta. Intentalo de nuevo")
    else {
    saldoIngresado.textContent = "$" + ingreso
    saldoNuevoIngreso.textContent = "$" + nuevoSaldo
    sessionStorage.setItem("saldoUsuario",nuevoSaldo); 
   }
    
    }
    console.log(3)
 }

 function retirarMonto(){
    
   displayInicio.classList.replace("d-block","d-none")
   displayConsulta.classList.replace("d-block","d-none")
   displayIngreso.classList.replace("d-block","d-none")
   displayRetiro.classList.replace("d-none","d-block")
   document.querySelector("#btnLogin1").addEventListener('click', retirarDinero);
   saldoRetirado.textContent = null
   saldoNuevoRetiro.textContent = null
   function retirarDinero(){
      saldoReal = sessionStorage.getItem("saldoUsuario")
   let retiro = document.querySelector("#retiroMonto").value
   let nuevoSaldo = parseInt(saldoReal,10) - parseInt(retiro,10)
   if(nuevoSaldo<10) alert("Lo sentimos, no puedes tener menos de $10 en tu cuenta. Intentalo de nuevo")
   else {
   saldoRetirado.textContent = "$" + retiro
   saldoNuevoRetiro.textContent = "$" + nuevoSaldo
   sessionStorage.setItem("saldoUsuario",nuevoSaldo);   
   }
   }
   console.log(4)
}
