(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", enviarDatos);

async function enviarDatos(e) {
    e.preventDefault();
    const formularioElementos = new FormData(formulario);
    const formularioObjeto = Object.fromEntries(formularioElementos);
    // console.log(formularioObjeto)
    const datosRetorno = await hacerPost(formularioObjeto)
    console.log(datosRetorno);    
}

const encabezado = new Headers({
    "Content-Type" : "application/json"
});

const urlBase = "http://localhost:8080/api/post" 

// Hacer fetch
const hacerPost = async (datos) => {
    const informacionRetorno = await fetch(urlBase, {
        method : "POST",
        headers : encabezado,
        body : JSON.stringify(datos)
    })
    console.log(informacionRetorno.status)

    const objetoDatos = informacionRetorno.json();
    return objetoDatos;
}
