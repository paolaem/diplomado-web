
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
    var numeroDiasSemana = diasSemana.length;
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

    var ul = document.createElement('ul');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
    var li5 = document.createElement('li');

    $(li1).append(triangulo1);
    $(li2).append(triangulo2);
    $(li3).append(triangulo3);
    $(li4).append(triangulo4);
    $(li5).append(triangulo5);
    $(ul).append(li1, li2, li3, li4, li5);
    areas.append(ul);

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
    
});
