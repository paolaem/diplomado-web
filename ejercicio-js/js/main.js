
$(function () {
   /* 
    1. Tipo de Valores:
        -Cadena de texto (STRING): Siempre van entre comillas simples o dobles.
            var myText = 'Hola Mundo';

        -Numéricos (NUMBER): Nuca van entre comillas. 
            var myNumber = 100; 

        -Booleano (BOOLEAN): Valores lógicos binarios, que puede ser TRUE o FALSE. 
            var verdadero = true;
            var verdadero2 = 1; 

            var falso = false;
            var falso2 = 0;

        -Arreglos (vectores o matrices) (AARAY): Conjunto de valores, del mismo tipo(recomendable). 
                                                siempre deben de estar entre [] y los valores separados
                                                por comas. 
        -Objeto (OBJECT): Conjunto de "propiedades" y "métodos(función)". 
        -Funciones (FUNCTION: Conjunto de sentencias cuando se invoca (ejecuta) a la función. Sirve para reciclar código.
        La sintaxis de una función "anónima" es: 
           
            function() {
                conjunto de sentencias...
            }

        Una función puede recibir parámetros, un parámetro es una variable local, es decir, que solo existe
        dentro de la función. 

            function(valor1, valor2) {

            }

        -Indefinidos (UNDEFINED)
        -Nulos (NULL)
        -Not an Number (NaN)
    
    2. Operadores artiméticos: 
         + -> Suma: 
                - valores NUMBER los suma. 
                - Si al menos un valor es de tipo STRING se concatenan. 
         - -> Resta
         / -> Disvisión 
         * -> Multiplicación 
         % -> Resto 
         ++ -> Incremento 
         -- -> Decremento
        
    3. Operadores relacionales: Siempre van a devolver un valor booleano (BOOLEAN)
        > Mayor que 
        < Menor que 
        == Igual a 
        === Exáctamente igual a 
        >= Mayor o igual que 
        <= Menor o igual que 
        != Diferente a
        !== Exáctamente diferente a
        
    4. Operadores lógicos: Siempre van a devolver un valor booleano (BOOLEAN)
        && AND
            true && true    -> true 
            true && false   -> false
            false && true   -> false
            false && false  -> false

        || OR (alt + 1 para sacar las barras)
            true || true    -> true
            true || false   -> true
            false || ture   -> true 
            false || false  -> false 

    5. Estructura de control is "if else"
        sintaxis:

            if (condicional) {
                La condicional debe ser un valor booleano  (BOOLEAN)
                Si la condicional es igual "ture" entonces se ejecuta el
                código que esté dentro de estas llaves. 
            } else {
                Si la condicional es igual a "false" entonces se ejecuta 
                el código que esté dentro de estas llaves.
            }

    6. Operador "for"
        Sintaxis: 

            for (var i = 0; i < 10; i++) {
                Código que se ejecuta en cada iteración.
            }
   */

   // STRING 
   var myName = 'Paola';
   var myLastName = 'Elizalde';

   // NUMBER 
    var myAge = 22;
    var myHeight = 1.60;

    //BOOLEAN
    var isMarried = false;
    var isRobot = false;
    var isHappy = true;

    // Suma 
    var myFullName = myName + ' ' + myLastName;
        //console.log(myFullName);

    var number1 = 50;
    var number2 = 120;
    var result = number1 + number2;
        //console.log(result);
    
    var result2 = myName + myAge;
        //console.log(result2);
    
    var number3 = '40';
    var number4 = '50';
    var result3 = number3 + number4;
        //console.log(result3);
    
    var resultadoResta = number1 - number2;
        //console.log(resultadoResta);
    
    var resultadoDivsion = number2 /number1;
        //console.log(resultadoDivsion);
    
    var resultadoResto = number2 % number1;
        //console.log(resultadoResto);
    
    number1++
    number1++
    number1++
    number1++
        //console.log(number1);
    
    number1--
    number1--
    number1--
    number1--
    number1--
    number1--
        //console.log(number1);
    
    //ARRAY
    var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    var numeroDiasSemana = diasSemana.length; // El punto lentght devolvera el numero de elementos que tiene el arreglo. 
    var position = 4;
        //console.log(diasSemana);
        //console.log(numeroDiasSemana);
        //console.log(diasSemana[position]);

    //FUNCTION
    //Area = (Base * Altura) / 2;
   
    // var base1 = 100;
    // var altura1= 200; 
    // var baseAltura1 = base1 * altura1;
    // var areaTriangulo1 = baseAltura1 / 2;

    // var base2 = 105;
    // var altura2 = 350;
    // var baseAltura2 = base2 * altura2;
    // var areaTriangulo2 = baseAltura2 / 2; 
        //console.log(areaTriangulo1);
        //console.log(areaTriangulo2);
    
    // var calculateArea1 = function() {
    //     var base = 100;
    //     var altura = 200; 
    //     var baseAltura = base * altura;
    //     var areaTriangulo = baseAltura / 2;
    //     console.log(areaTriangulo);
    // };

    // var calculateArea2 = function() {
    //     var base = 105;
    //     var altura = 350; 
    //     var baseAltura = base * altura;
    //     var areaTriangulo = baseAltura / 2;
    //     console.log(areaTriangulo);
    // };

    // calculateArea1();
    // calculateArea2();
    
     /* 
        Calcular el área de los siguientes triángulos: 
            1. base= 100, altura = 200; 
            2. base= 105, altura = 350; 
            3. base= 3876, altura = 1984; 
            4. base= 245.34, altura = 54.12; 
            5. base= 1254.23, altura = 7463.45; 
    */
    var ejemplo;
    console.log(ejemplo); // Esto devolverá un valor indefinido (UNDEFINED);

    var calcularArea = function(base, altura) {
        var area = (base * altura) / 2; 
        return area; //mostrar en la pagina 
    };

    var triangulo1 = calcularArea(100, 200);
    var triangulo2 = calcularArea(105, 350);
    var triangulo3 = calcularArea(3876, 1984);
    var triangulo4 = calcularArea(245.34, 54.12);
    var triangulo5 = calcularArea(1254.23, 7463.45);

    var areas = $('#areas');
    //areas.append(triangulo1, triangulo2, triangulo3, triangulo4, triangulo5);

    // var ul = document.createElement('ul');
    // var li1 = document.createElement('li');
    // var li2 = document.createElement('li');
    // var li3 = document.createElement('li');
    // var li4 = document.createElement('li');
    // var li5 = document.createElement('li');

    // $(li1).append(triangulo1);
    // $(li2).append(triangulo2);
    // $(li3).append(triangulo3);
    // $(li4).append(triangulo4);
    // $(li5).append(triangulo5);
    // $(ul).append(li1, li2, li3, li4, li5);
    // areas.append(ul);

    //OBJECT
    var persona = {
        name: 'Paola',
        lastName: 'Elizalde',
        age: 22,
        height: 1.60,
        isMarried: true,
        isRobot: false,
        pets: [
            {
                type: 'perro',
                name: 'Chester',
                age: 2,
            },
            {
                type: 'perro',
                name: 'Lua',
                age: 10,
            },
        ],
        printFullName: function() {
            var fullName = this.name + ' ' + this.lastName;
            areas.append(fullName);
        }
    };
    // console.log(persona['name']);
    // console.log(persona['lastName']);
    // console.log(persona['pets'][0]['name']);
    // console.log(persona['pets'][1]['name']);
    // console.log('----------');
    // console.log(persona.name);
    // console.log(persona.lastName);
    // console.log(persona.pets[0].name);
    // console.log(persona.pets[1].name);

    // persona.printFullName();

    //OPERADORES RELACIONALES
    var numero5 = 10;
    var numero6 = 20;
    var numero7 = 6;
    var numero8 = 4;
    var texto8 = '4';
    var resultado = numero5 < numero6;
    var resultado2 = numero6 != (numero5 + numero7 + numero8);
        //console.log(resultado);
        //console.log(resultado2);
    var resultado3 = numero8 == texto8; 
    var resultado4 = numero8 === texto8;  
        //console.log('Igual a: ', resultado3); mostrará TRUE ya que que no importa el tipo de valor solo el result.
        //console.log('Exáctamente igual a: ', resultado4); mostrará FALSE ya que uno es texto y el otro es numero.
    
    //OPERADORES LÓGICOS
    var isMexican = true;
    var isHappy = false;

    var isAcceptInFrance = isMexican && isHappy;
    var isAcceptInEU = isMexican || isHappy;

    //console.log('Es aceptado en Francia: ', isAcceptInFrance);
    //console.log('Es aceptado en EU: ', isAcceptInEU);

    //ESTRUCTURA DE CONTROL

    //if(isMexican && isHappy) {
    //    console.log('Es aceptado en Francia');
    //} else {
    //   console.log('No aceptado en Francia');
    //}

    //OPERADOR FOR 
    for(
        var i = 0;
        i < numeroDiasSemana;
        i++
    ) {
    //console.log('El día actual es: ', diasSemana[i]);
    }

    // var datosArea = [triangulo1, triangulo2, triangulo3, triangulo4, triangulo5];
    // var numeroAreas = datosArea.length;

    // for (
    //     var i = 0; 
    //     i < numeroAreas;
    //     i++
    // ) {
    //     console.log('El área es: ', datosArea[i]);
    // }

    var values = [
        { base: 100, height:200 },
        { base: 105, height:350 },
        { base: 3876, height:1984 },
        { base: 245.34, height:54.12 },
        { base: 1254.23, height:7463.45 },
    ];

    var areaValues = [];
    var ul = document.createElement('ul');
    for(
        var i = 0; 
        i < values.length;  
        i++
    ){
        var currentArea = calcularArea(values[i].base, values[i].height);
        areaValues.push(currentArea); //push inserta los datos de una variable en otra
    }

    for(var i = 0; i < areaValues.length; i++) {
        var li = document.createElement('li');
        $(li).append(areaValues[i]);
        $(ul).append(li);
    }
    
    areas.append(ul);
 
    /*
    Eventos:
        -click
        -mouseeneter
        -mouseleave
        -scroll

    Método ".on()" de jQuery: Permite escuchar eventos que se descencadenan
    en un elemento HTML en particualar. 
    sintaxis: 
        Recibe 2 parámetros:
        1. El evento que quiere escuchar. 
        2. La función anónima que se va a ejectuar cuando suceda el evento
        en dicho elemento.
            elementoHTML.on(evento, fn);
            elementoHTML.evento('click', function() {..code});
    ó

        Recibe un paramentro: 
        1. Un objeto con pares (evneto y funcion)
        

    Método ".css()" de jQuery: Permite modificar estilos de css 
        sintaxis: 
            Recibe dos parámetros:
            1.La propiedad css que se quiere modificar 
            2.El nuevo valor de dicha propiedad 
                elementoHTML.css(propiedad, valor);
                elementoHTML.css('color', '#f00');

        ó
            Recibe un paramentro
            1. Un objeto con pares (evneto y funcion)

    
    Método ".attr()" de jQuery: 
        1. Si se pasa un solo parámetro, éste parámetro debe ser el nombre de un atributo 
        del elemento y entonces devolverá el valor de éste atributo. 
        
        2. Si se pasan dos parámetros, el primero debe ser el nombre del atributo 
        que queremos modificar y el segundo el nuevo valor de éste atributo. 
        Sintaxis:
            
            1. elementoHTML.attr('src); -> Esto devolverá el valor del atributo "src". 

            2. elemento HTML.attr('src', 'image/001.jpg'); -> Esto cambia el valor 
                                                    del atributo  "src" por 'image/001.jpg'
    */

    var myButton = $('#myButton');
    var myWindow = $(window);
    // myButton.on('click', function(){
    //     console.log('Hice click sobre mi botón');
    // });
    // myButton.on('mouseenter', function(){
    //     console.log('Estoy sobre mi botón');
    // });
    // myButton.on('mouseleave', function(){
    //     console.log('Estoy fuera de mi botón');
    // });

    var macImage = $('#macImage');
        //console.log(macImage);
        // var macImageSrc = macImage.attr('src');
        //console.log(macImageSrc);

    myButton.on({
        click: function() {
            macImage.attr('src', 'images/050.jpg');
        },
        mouseenter: function() {
            $(this).css({
                backgroundColor: '#f00',
                color: '#ff0',
            });
        },
        mouseleave: function() {
            $(this).css('background-color', 'lightpink');
        },
    });

    myWindow.on('scroll', function() {
        var positionScroll = $(this).scrollTop();
        var newSrc = 'images/0' + positionScroll + '.jpg';
        if (positionScroll <=74) {
            macImage.attr('src', newSrc);
        } 
    });
});
