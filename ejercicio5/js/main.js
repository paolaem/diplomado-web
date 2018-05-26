$(function () {
    /* 
    Selectores jQuery, sintaxis: 
        $('[selector css]') 

        ejemplos:
        $('.form') -> Esto va a seleccionar a todos los elementos HTML
            que tengan el atributo "id" con valor "form".
        
        $('#form') -> Esto va a seleccionar a todos los elementos HTML
            que tengan el atributo "class" con valor "form".

        $('p') -> Esto va a seleccionar a todos los elementos de tipo "p".

        $('.page-main .page-section p a') -> Esto va a seleccionar a todos los elementos de tipo "a" 
            que cumplan toda la condición.


Ejemplo de combinación de 2 objetos utilizando el método (función) ".extend()" de jQuery.

    var alumno = {
        nombre: 'Sergio',
        apellido: 'Elizalde',
        edad: 22,
    };
    
    var alumnoUpdate = {
        nombre: 'Valeria Elizalde',
        edad: 18,
        ocupacion:'Estudiante',
    };

    $.extend(alumno, alumnoUpdate);
    console.log(alumno);
    */

$.extend($.validator.messages, {
    required: 'Este campo es obligatorio',
    email: 'Por favor, escribe una dirección de correo válida.',
    number: 'Por favor, escribe un número válido.',
    rangelength: $.validator.format( 'Por favor, escribe un valor entre {0} y {1} caracteres.' ),
});

   $('#form').validate({
       rules: {
           tel: {
            rangelength: [8, 10],
            number: true,
           }
       }
   });
// console.log($.validator.messages);


});
