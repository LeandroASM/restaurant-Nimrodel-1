//Función que permite mostrar el fomulario de contacto y ocultar el de reserva
function formContacto(){
    document.getElementById("form-contacto").classList.remove('d-none')
    document.getElementById("form-contacto").classList.add('d-block');

    document.getElementById("form-reserva").classList.add('d-none')
}

//Función que permite mostrar el fomulario de reserva y ocultar el de contacto
function formReserva(){
    document.getElementById("form-reserva").classList.remove('d-none')
    document.getElementById("form-reserva").classList.add('d-block');

    document.getElementById("form-contacto").classList.add('d-none')
}


var form = document.getElementById("formulario-contacto");
//función que se ejecuta al enviar el formulario
form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(validarForm());
    if(validarForm()){
        exito();
    }
})

//función que valida los datos ingresados al formulario
function validarForm(){
    var datos = obtenerDatos();
    var nombre = datos.nombre;
    var correo = datos.correo;
    var telefono = datos.telefono;
    var motivo = datos.motivo;
    var textomotivo = datos.textomotivo;
    
    var formValido = true;
    if(nombre == "" || validarNombre == false){
        alert("El campo 'Nombre' es requerido y debe tener un formato correcto");
        formValido = false;
    }
    
    if(correo == "" || validarCorreo == false){
        alert("El campo 'Correo' es requerido y debe tener un formato correcto");
        formValido = false;
    }
    
    if(telefono == "" || validarTelefono == false){
        alert("El campo 'Teléfono es requerido y debe tener un formato correcto");
        formValido = false;
    }
    
    if(motivo == ""){
        alert("El campo 'Motivo' es requerido y debe tener un formato correcto");
        formValido = false;
    }
    
    if(textomotivo == ""){
        alert("El campo 'Razón del Motivo' es requerido y debe tener un formato correcto");
        formValido = false;
    }
    return formValido;
}
//Función que muestra un mensaje cuando los datos son válidos
function exito(){
    var datos = obtenerDatos();
    var nombre = datos.nombre;
    var correo = datos.correo;
    var motivo = datos.motivo;

    alert("nombre " + nombre );
    alert(`Muchas gracias ${nombre} hemos recibido su ${motivo} y enviaremos una pronta respuesta al correo ${correo}`);
}

//Función que obtiene los datos del formulario, que serán utilizados en el resto de funciones
function obtenerDatos(){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var motivo = document.getElementById("motivo").value;
    var textomotivo = document.getElementById("textomotivo").value;
    return {
        nombre:nombre,
        correo:correo,
        telefono:telefono,
        motivo:motivo,
        textomotivo:textomotivo 
    };
}   


//funciones que validan si el formato de los datos ingresados son correctos
function validarNombre(nombre){
    let expression = /^[a-zñáéíóú]+(\s[a-zñáéíóú]+)?$/i;
    return expression.test(nombre);
}

function validarCorreo(correo){
    let expression = /^[\w]+(\.)?[\w]+@[\w]+\.[\w]{2,3}$/i;
    return expression.test(correo);
}
function validarTelefono(telefono){
    let expression = /^+5{1}6{1}9{1}[0-9]{8}$/i;
    return expression.test(telefono);
}