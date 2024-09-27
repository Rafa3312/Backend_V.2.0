class Usuario{
    constructor(data){
        this.id = data.id;
        this.nombre = data.nombre;
        this.usuario = data.usuario;
        this.password = data.password;
        this.salt = data.salt;
        this.tipoUsuario = data.tipoUsuario;
    }

    set salt(salt) {
        this._salt = salt;
    }

    set tipoUsuario(tipoUsuario) {
        this._tipoUsuario = tipoUsuario;
    }

    set id(id){
        this._id = id;
    }

    set nombre(nombre){
        const nombreRegex=/^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (nombreRegex.test(nombre)) {
            this._nombre = nombre;
        }
        
    }

    set usuario(usuario=""){
        if (usuario.length>0 && usuario.length<15) {
            this._usuario = usuario;
        }   
    }

    set password(password){
        const passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[\W_]).{4,}$/;
        //if (passwordRegex.test(password)) {
            this._password = password;  
        //}
        
    }

    get id(){
        return this._id
    }

    get nombre(){
        return this._nombre
    }

    get usuario(){
        return this._usuario
    }

    get password(){
        return this._password
    }

    get salt(){
        return this._salt;
    }

    get tipoUsuario(){
        return this._tipoUsuario;
    }

    get getUsuario(){
        const conId = {
            id: this._id,
            nombre: this._nombre,
            usuario: this._usuario,
            password: this._password,
            salt: this.salt,
            tipoUsuario: this.tipoUsuario

        }

        const sinId = {
            nombre: this._nombre,
            usuario: this._usuario,
            password: this._password,
            salt: this.salt,
            tipoUsuario: this.tipoUsuario
        }
        if (this._id!=undefined) {
            return conId;
        }
        else{
            return sinId;
        }
    }

}
module.exports = Usuario

/*var data ={
    nombre: "Rafael Sámano Varela",
    usuario: "Rafa3312",
    password: "RsVc123"
}

var usuario1 = new Usuario(data)

console.log(usuario1.getUsuario);*/
