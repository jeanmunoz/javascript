//TEXTOS CON LAS INDICACIONES
var text1="1.- Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.";
var text2="2.- Suma pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio..";
var text3="3.- Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).";
var text4="4.- Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8). ";
var text5="5.- Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).  ";
var text6="6.- Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2). ";
var text7="7.- Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’. ";
var text8="8.- Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).   ";
var text9="9.- Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).";
var text10="10.- Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).";
var text11="11.- Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).";
var text12="12.-Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). ";
var text13="13.- De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].";


// 1.- Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function array1Hasta255(){
var arr=[];
for(i=1;i<=255;i++){
arr.push(i);
}
document.getElementById("mostrar").innerHTML = text1+"<br><br>"+arr;
}


// 2.- Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números 
//pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio..sss
function sumarParesHasta1000(){
var sum=0;
for(i=1; i<=1000;i++){
    if(i%2==0){
        sum=sum + i;
    }
    document.getElementById("mostrar").innerHTML = text2+"<br><br>"+sum;
}
}

//3.- Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares 
// entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function sumarImparesHasta5000(){
    var sum=0;
    for(i=0; i<=5000; i++){
        if(i%2!=0){
            sum=sum+i;
        }
        document.getElementById("mostrar").innerHTML = text3+"<br><br>"+sum;
    }
}

// 4.- Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array 
// (ej:  [1,2,5] retorna 8). 
function sumaArray(){
   var sum=0;
    //    var [arr]= document.getElementById("input4").value;
    // var num1=1;
    // var num2=2;
    // var num5=5;
    // var arreglo="["+num1+","+num2+","+num5+"]";
   var arr=[1,2,5];
   for(i=0; i<arr.length; i++){
       sum = sum + arr[i];
   }
   document.getElementById("mostrar").innerHTML = text4+"<br><br>"+sum;
}

//5.- Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el 
//número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
function elMayor(){
    var arr=[-3,3,5,7]
    var mayor= arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]>mayor){
            mayor=arr[i];
        }
    }
    document.getElementById("mostrar").innerHTML = text5+"<br><br>"+mayor;
}

//Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el 
//promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
function promedioArray(){
    var sum=0;
    var arr=[1,3,5,7,20];
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i];
        
    }var prom=sum/arr.length;
    document.getElementById("mostrar").innerHTML = text6+"<br><br>"+prom;
 }


 //Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 
 //(ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
 function arregloImpares(){
    var arr = [];
    for(var i=1; i<=50; i++){
         if(i%2!==0){
             arr.push(i);
         i = i +1;
         }
     }document.getElementById("mostrar").innerHTML = text7+"<br><br>"+arr;
 }

 //Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
 //Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

 function cantidadMayores(){
     var Y=3;
     var arr=[1,3,5,7];
     var sum=0;
     for(i=0; i<arr.length; i++){
         if(arr[i]>Y){
             sum++
         }
     }document.getElementById("mostrar").innerHTML = text8+"<br><br>"+sum;
 }

 //9.- Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor 
 //por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4])."
 function cuadrado(){
     var arr1=[1,5,10,-2];
     var arr2=[];
     for(i=0; i<arr1.length; i++){
        arr2.push(arr1[i]*arr1[i]);
     }document.getElementById("mostrar").innerHTML = text9+"<br><br>"+arr2;
 }

//10.- Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número 
//negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números 
//negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).";
function reemplazoNegativos(){
    var arr1=[1,5,10,-2];
    var arr2=[];
    for(i=0; i<arr1.length; i++){
       if(arr1[i]<0){
        arr1[i]=0;
       }
    }document.getElementById("mostrar").innerHTML = text10+"<br><br>"+arr1;
}

//11.- Max/Min/Avg: Dado un array con múltiples valores, escribe una función 
//que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio
// (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function maxMinProm(){
    var arr=[1,5,10,-2];
    var sum=0;
    var min= arr[0];
    var max= arr[0];
    for(i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];}
        if(arr[i]<min){
            min=arr[i];}
    sum = sum + arr[i];
    }var prom=sum/arr.length;
    document.getElementById("mostrar").innerHTML = text11+"<br><br>"+"Mínimo:"+min+" Máximo:"+max+" Promedio:"+prom;
}

//12.-Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
//La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
function intercambio(){
    var arr=[1,5,10,-2];
    var arr2=[];
    var primero=arr[0];
    var ultimo=arr[arr.length-1]
    for(i=0; i<arr.length; i++){
        if(i==0){
            arr2.push(ultimo);
        }
        if(i==arr.length-1){
            arr2.push(primero);
        }
        if(i!=0 && i!=arr.length-1){
            arr2.push(arr[i]);}
        
    }
document.getElementById("mostrar").innerHTML = text12+"<br><br>"+"Arreglo:"+arr2;
}

//13.- De Número a String: Escribe una función que tome un array de números y reemplace
// cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], 
//tu función devolverá [‘Dojo’,‘Dojo’,2].
function reemplazoNegativosDojo(){
    var arr1=[-1,-3,2];
    var arr2=[];
    for(i=0; i<arr1.length; i++){
       if(arr1[i]<0){
        arr1[i]="Dojo";
       }
    }document.getElementById("mostrar").innerHTML = text13+"<br><br>"+arr1;
}