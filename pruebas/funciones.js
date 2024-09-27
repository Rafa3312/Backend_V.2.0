function saludar(nombre, apellido) {
 console.log("Hola "+nombre+" "+apellido);
}
saludar("Paco", "Memo");


var saludar=nombre=>{
    console.log("Heyy "+nombre); 
}
saludar("Pecas");


var saludo2=(nombre1,nombre2)=>{
    console.log("Heyy "+nombre1+" "+nombre2);
}
saludo2("Paco","Memin");


var saludo3=(nombre1,nombre2)=>{
    return "Heyy "+nombre1+" "+nombre2;    
}
var a = saludo3("Memo","Memin");
console.log(a);


var saludo4=(nombre1)=>"Heyy "+nombre1;    
var a = saludo4("Memo");
console.log(a);

var saludo5=function(){
    console.log("Hola función anónima");  
}
saludo5();


var saludo6=()=>{
    console.log("Estas en saludo 6"); 
}


var saludo7=(nombre="Anónimo", s)=>{
    console.log("Hola "+nombre);
    s();
}
saludo7("Vivaldi", saludo6);