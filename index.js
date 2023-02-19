//Funcion para validar el campo del nombre//
function submitNombre(){
	const elementoNombre = document.getElementById('nombre');
	const reglasNombre = /^[A-Za-z\s]+$/;
	const error1 = document.getElementById('error1');

	if(elementoNombre.value == 0){
		error1.innerHTML = "Rellene este campo";
		elementoNombre.classList.add("error");
		elementoNombre.classList.add("imagenError");
		return false; 
	} else if(reglasNombre.test(elementoNombre.value)){
		elementoNombre.classList.remove("error");
		elementoNombre.classList.remove("imagenError");
		error1.innerHTML = "";
		elementoNombre.classList.add("success");
		elementoNombre.classList.add("imagenSuccess");
		return true; 
	} else {
		error1.innerHTML = "Caracter invalido en el campo (use solo letras)";
		elementoNombre.classList.add("error");
		elementoNombre.classList.add("imagenError");
		return false; }
	}
//Funcion para validar el campo del email//
function submitEmail(){
	const elementoEmail = document.getElementById('email');
	const reglasEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	const error2 = document.getElementById('error2');

	if(elementoEmail.value == 0){
		error2.innerHTML = "Rellene este campo";
		elementoEmail.classList.add("error");
		elementoEmail.classList.add("imagenError");
		return false; 
	} else if(reglasEmail.test(elementoEmail.value) ){
		elementoEmail.classList.remove("error");
		elementoEmail.classList.remove("imagenError");
		error2.innerHTML = "";
		elementoEmail.classList.add("success");
		elementoEmail.classList.add("imagenSuccess");
		return true; 
	} else {
		error2.innerHTML = "Email inválido";
		elementoEmail.classList.add("error");
		elementoEmail.classList.add("imagenError");
		return false; 
	}
} 
//Funcion para validar el campo de la password//
function submitPassword(){
	const password = document.getElementById('password');
	const reglasPassword = /^[\s\S]{8,}$/;
	const error3 = document.getElementById('error3');

	if(password.value == 0){
		error3.innerHTML = "Rellene este campo";
		password.classList.add("error");
		password.classList.add("imagenError");
		return false; 
	} else if(reglasPassword.test(password.value) ){
		password.classList.remove("error");
		password.classList.remove("imagenError");
		error3.innerHTML = "";
		password.classList.add("success");
		password.classList.add("imagenSuccess");
		return true; 
	} else {	
		error3.innerHTML = "No debe tener más de 8 caracteres";
		password.classList.add("error");
		password.classList.add("imagenError");
		return false; }
}
//Funcion para validar el campo de confirmaciond de password//
function validarPassword(){
	const password = document.getElementById('password');
	const confirmarPassword = document.getElementById('confirm');
	const error4 = document.getElementById('error4');

	if(confirmarPassword.value == 0){
		error4.innerHTML = "Rellene este campo";
		confirmarPassword.classList.add("error");
		confirmarPassword.classList.add("imagenError");
		return false;
	 } else if (password.value == confirmarPassword.value ){
		confirmarPassword.classList.remove("error");
		confirmarPassword.classList.remove("imagenError");
		error4.innerHTML = "";
		confirmarPassword.classList.add("success");
		confirmarPassword.classList.add("imagenSuccess");
		return true; 
	} else {
		error4.innerHTML = "Las contraseñas no coinciden";
		confirmarPassword.classList.add("error");
		confirmarPassword.classList.add("imagenError");
		return false; 
	} 
}
//Funcion para validar todos los campos a la vez al presionar submit//
function submitFormulario(){

	if (validarPassword() && submitPassword() && submitEmail() && submitNombre()){
		alert("Inscripción correcta");
		return true; }
	else {
		return false; }
}
