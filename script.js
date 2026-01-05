const inputnumber= document.getElementById("InputNumber1");

const inputradio1= document.getElementById("InputRadio1");

const inputradio2= document.getElementById("InputRadio2");

const inputradio3= document.getElementById("InputRadio3");

const inputradio4= document.getElementById("InputRadio4");

const inputradio5= document.getElementById("InputRadio5");

const inputradio6= document.getElementById("InputRadio6");

const inputradio7= document.getElementById("InputRadio7");

const inputradio8= document.getElementById("InputRadio8");

const inputradio9= document.getElementById("InputRadio9");

const inputradio10= document.getElementById("InputRadio10");

const inputradio11= document.getElementById("InputRadio11");

const inputradio12= document.getElementById("InputRadio12");

const button= document.getElementById("button1");

const Wynik= document.getElementById("Wynik");

let Obliczenie=0;

button.onclick=function(){
if (inputradio1.checked){
Obliczenie= Number(inputnumber.value);    
Obliczenie= Obliczenie*1000;
Wynik.textContent= Obliczenie+`m`;
}
else if (inputradio2.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie*100000;
    Wynik.textContent= Obliczenie+ `cm`;
}
else if (inputradio3.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie*1000000;
    Wynik.textContent= Obliczenie+ `mm`;

}
 else if (inputradio4.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie/1000;
    Wynik.textContent= Obliczenie+ `km`;
}
else if (inputradio5.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie*100;
    Wynik.textContent= Obliczenie+ `cm`;
}
else if (inputradio6.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie*1000;
    Wynik.textContent= Obliczenie+ `mm`;
}
else if (inputradio7.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie/100000;
    Wynik.textContent= Obliczenie+ `km`;
}
else if (inputradio8.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie/100;
    Wynik.textContent= Obliczenie+ `m`;
}
else if (inputradio9.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie*10;
    Wynik.textContent= Obliczenie+ `mm`;
}
else if (inputradio10.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie/1000000;
    Wynik.textContent= Obliczenie + `km`;
}
else if (inputradio11.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie/1000;
    Wynik.textContent= Obliczenie + `m`;   
}
else if (inputradio12.checked){
    Obliczenie= Number(inputnumber.value);
    Obliczenie= Obliczenie/10;
    Wynik.textContent= Obliczenie +`cm`;
}
else{
Wynik.textContent= `Wybierz jednostkę!`;
}
}
