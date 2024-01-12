       //uso de isInteger
       Number.isInteger(0);//true
       //uso de subString
       var variable='aaaooo';
       variable.substring(3,variable.length)//me devolbera las oooo
       //uso de indexOf()
       var entrada='aaaa'
       
       entrada.indexOf('a')//0
       
       entrada.indexOf('b')//-1
       //uso de isNan
       var entrada='aaaa'
       isNaN(entrada)//TRUE
       //uso del MATHRANDOM entre dos valores especificados
       function getRandomArbitrary(min, max) {
           return Math.random() * (max - min) + min;
         }
       //uso de split
       const editor = 'free code camp'
       editor.split(' ') // [ 'free', 'code', 'camp' ]
       //uso de slice
       let sitioWeb = "www.programacionfacil.org";
       let fragmento = sitioWeb.slice(4);//programacionfacil.org
       console.log(fragmento);
       //uso de concat
       const str1 = 'Hello';
       const str2 = 'World';
       console.log(str1.concat(' ', str2));// Expected output: "Hello World"
       
       
       
       
       //funciones complementarias
       function contarVocales(entrada)
       {
           let contador=0;
           let vocales=["a","e","i","o","u","A","E","I","O","U"];
           for (let i = 0; i < vocales.length; i++)
           {
             for (let j = 0; j < entrada.length; j++)
             {
               if (entrada[j]==vocales[i])
               {
                   contador++;
               }
             }  
           }
               return contador;
       }
       function contarEspacios(entrada)
       {
           let contador=0;
           let espacio=" ";
           for (let j = 0; j < entrada.length; j++)
             {
               if (entrada[j]==espacio)
               {
                   contador++;
               }
             }  
          
               return contador;
       }
       function contarComas(entrada)
       {
           let contador=0;
           let coma=",";
           for (let j = 0; j < entrada.length; j++)
             {
               if (entrada[j]==coma)
               {
                   contador++;
               }
             }  
          
               return contador;
       }
       function esDivisible(entrada)
       {
           parseInt(entrada);
          
           let numero=0;
           for (let i = 0; i < entrada-1; i++)
           {
               numero++
             if(entrada%numero===0)
             {
               console.log("es divisible entre"+numero);
            
             }
            
            
           }
       }  
       function esPrimo(entrada)
       {
           parseInt(entrada);
           let contador=0;
           let numero=0;
           for (let i = 0; i < entrada; i++)
           {
               numero++
             if(entrada%numero===0)
             {
               contador++      
             }  
           }
           if(contador<=2)
           {
               console.log("es primo");
           }
       }
       function numeroMaxProx(entrada)
       {
           let numero=entrada.substring(2,3);
           if(parseInt(numero)>=5)
           {
               entrada=parseInt(entrada)+1;
           }
           return entrada;
       }
       //matriz auto generada segun los valores introducidos por el usuario y en cada celda sera 0-0 y sucesivamente
       function createMatrix() {
           if (arguments.length > 2) {
             throw new Error("Esta función no puede aceptar más de dos argumentos.");
           }
        
           var numRows = arguments[0];
           var numColumns = arguments[1];
        
           var matrix = [];
        
           for (var i = 0; i < numRows; i++) {
             var row = [];
             for (var j = 0; j < numColumns; j++) {
               row.push(i + "-" + j);
             }
             matrix.push(row);
           }
        
           console.log(matrix);
         }
       //tabla generada  segun los valores introducidos por el usuario mediante arguments y en cada celda sera 0-0 y sucesivamente
       function createTable() {
           if (arguments.length > 2) {
             throw new Error("Esta función no puede aceptar más de dos argumentos.");
           }
        
           var numRows = arguments[0];
           var numColumns = arguments[1];
        
           var table = document.createElement("table");
        
           for (var i = 0; i < numRows; i++) {
             var row = document.createElement("tr");
             for (var j = 0; j < numColumns; j++) {
               var cell = document.createElement("td");
               cell.textContent = i + "-" + j;
               row.appendChild(cell);
             }
             table.appendChild(row);
           }
        
           return table;
         }
       //tabla generada  segun los valores introducidos por el usuario mediante arguments
       function createTable() {
           if (arguments.length > 2) {
             throw new Error("Esta función no puede aceptar más de dos argumentos.");
           }
        
           var numRows = arguments[0];
           var numColumns = arguments[1];
        
           var table = document.createElement("table");
        
           for (var i = 0; i < numRows; i++) {
             var row = document.createElement("tr");
             for (var j = 0; j < numColumns; j++) {
               var cell = document.createElement("td");
               row.appendChild(cell);
             }
             table.appendChild(row);
           }
        
           return table;
         }
       //matriz auto generada segun los valores introducidos por el usuario
       function createMatrix() {
           if (arguments.length > 2) {
             throw new Error("Esta función no puede aceptar más de dos argumentos.");
           }
        
           var numRows = arguments[0];
           var numColumns = arguments[1];
        
           var matrix = [];
        
           for (var i = 0; i < numRows; i++) {
             var row = [];
             for (var j = 0; j < numColumns; j++) {
               row.push(i + "-" + j);
             }
             matrix.push(row);
           }
        
           return matrix;
         }
         //FUNCIONES PRINCIPALES
       //funcion numero aleatorio
       function numeroAletorio(min,max)
       {
           return Math.round(Math.random()*(max,min)+min);
       }
       //funcion para saber si es divisible
       function Divisible(dividendo,divisor)
       {
       var resultado = false;
       var operacion= 1*(dividendo)%(divisor)*1;
       if(Number.isInteger(operacion))
       {
           resultado= true;
       }
       return resultado;
       }
       //funcion para saber si es numero
       function esNumero (entrada)
       
       {
       
           let resultado=true;
       
           if(isNaN(entrada)|| entrada===""|| entrada===null)
       
           {
       
               resultado=false;
       
           }
       
           return resultado;
       
       }
       //funcion para saber si es entero
       function esEntero(numero)
       {
       //opcion 1
       return Number.isInteger(numero);
       //opcion 2
       // let siLoES = false;
       // let resto = numero%1;
       // if (resto===0)
       // {
       //  siLoES == true ;
       // }
       //  return siLoES;
       }
       //funcion para convertir string en number
       function convertirStringNumber(entrada)
       {
           //si multiplicamos por uno el string si es numerico se pasa a numero
           //opcion1
           entrada= entrada*1;
           return entrada;
          
           //opcion2
           // entrada= parseFloat(entrada);
           // return entrada;
       }
       //funcion para saber si es primo
       function numerosPrimos ( minimo,maximo)
       {
           var numerosPrimos;
           for (var i = minimo; i < maximo; i++)
           {
               for (let j = 1; j < maximo; i++)
                {
                   if (i % j == 0)
                   {
                       console.log("no es primo");
                   } else {
                       console.log("es primo");
                   }
       
               }
       
           }
       }
       //funcion para saber si es positivo
       function esPositivo (entrada)
       
       {
       
           let resultado=false;
       
           if(entrada>=0)
       
           {
       
               resultado=true;
       
           }
       
           return resultado;
       
       }
       //funcion para saber si un numero esta entre un rango
       function esRango (minimo,entrada,maximo)
       {
           var resultado=false;
           entrada= 1*(entrada);
           minimo= 1*(minimo);
           maximo= 1*(maximo);
           if(entrada<maximo&& entrada>minimo)
           {
               resultado=true;
           }
           return resultado;
       }
       //funcion para saber si un numero es factorial
       function Factorial (entrada)
       
       {
           var factorial= 1;
       
           for (let i = 2; entrada >=i; i++)
           {
               factorial=factorial*i
           }
               return factorial;
       }
       //funcion sumatorio
       function Sumatorio (entrada)
       
       {
           var factorial= 0;
       
           for (let i = 1; entrada >=i; i++)
           {
               factorial=factorial*i
           }
               return factorial;
       }
       
       
               //FUNCIONES SORTS EJEMPLO DE USO: ARRAYS.sort(ordenarMenorMayor)
       
       
       //funcion oredenar de menor a mayor
       function ordenarMenorMayor(a,b)
       {
           return a-b;
       }
       //funcion ordenar de mayor a menor
       function ordenarMayorMenor(a,b)
       {
           //dos formas de hacerlo
           //return b-a;
           return -1*(ordenarMenorMayor(a,b))
       }
       //funcion ordenar pares primeros
       function ordenarParesPrimeros(a,b)
       {
       let resultado;
        if(a%2==0)
        {
           if(b%2==0)
           {
               resultado=0;
           }else
           {
               resultado=-1;
           }
        }else
        {
           if(b%2==0)
           {
               resultado=1;
           }else
           {
               resultado=0;
           }
        }
        return resultado;
       }
       //funcion ordena aleatorio
       function ordenarAleatorio(a,b)
       {
           return numeroAletorio(-1,1);
       }
       
       //COMO FUNCIONA JOIN PARA ARRAYS
       //sirve para separar segun el parametro
       const elements = ['Fire', 'Air', 'Water'];
       
       console.log(elements.join());
       // expected output: "Fire,Air,Water"
       
       console.log(elements.join(''));
       // expected output: "FireAirWater"
       
       console.log(elements.join('-'));
       // expected output: "Fire-Air-Water"
       
       //COMO FUNCIONA SPLICE PARA ARRAYS
       //reace un nuevo array a partir del antiguo y el valor es la longitud que coje
       const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
       
       console.log(animals.slice(2));
       // expected output: Array ["camel", "duck", "elephant"]
       
       console.log(animals.slice(2, 4));
       // expected output: Array ["camel", "duck"]
       
       console.log(animals.slice(1, 5));
       // expected output: Array ["bison", "camel", "duck", "elephant"]
       
       console.log(animals.slice(-2));
       // expected output: Array ["duck", "elephant"]
       
       console.log(animals.slice(2, -1));
       // expected output: Array ["camel", "duck"]
       
       console.log(animals.slice());
       // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
       //COMO FUNCIONA SLPIT PARA ARRAYS
       //separa segun el parametro que pongas en este caso espacios y lo mete en un array
       var n = "hola como te llamas";
       n.split(" ");
       
                   //INTERVALOS Y COSAS QUE HACER CON ELLOS
       //Tipos de intervalos
       //cada 1s ejecutara la funcion a la que llama
       var intervalo = setInterval(funcion,/*numero de tiempo 1s*/ 1000);
       //ejecutara la funcion a la que llama solo una vez despues de q transcurra el tiempo indicado
       var timeout = setTimeout(funcion,/*numero de tiempo 1s*/ 1000);
       //Limpiar intervalos
       clearInterval(intervalo);
       clearTimeout(timeout);
       
       
                       //REFERENCIAS A EJERCICIOS YA REALIZADOS
       //sorts unidad 4 ejercicioPropuesto2
       //Tarea3 ejercicio1 antonio verificar contraseña
       //tarea3 ejercicio2 timeout e intervalos
       //tarea4 ejercicio1 crear arrays de dimensiones multiples