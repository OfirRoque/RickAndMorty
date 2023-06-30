const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)[a-zA-Z0-9]{6,10}$/;

export default function validation (userData) {
    const errors = {};
    if(!emailRegex.test(userData.email)){
        errors.email = "Debe ingresar un email valido"
    }
    if(!userData.email){
        errors.email = "Debe ingresar su email" 
    }
    if(userData.email.length > 36){
        errors.email = "El email debe ser menor o igual a 35 caracteres"
    }
    if(!passwordRegex.test(userData.password)){
        errors.password = "Su contraseña debe tener de 6 a 10 caracteres, al menos un numero y una mayuscula"
    }
    if(!userData.password){
        errors.password = "Ingrese su contraseña"
    }
    return errors;
};