//Alert
// alert("hel");

//числа от 10 до 20 в консоль
// for(let i = 10; i<=20; i++){
//     console.log(i);
// }

// Квадраты чисел от 10 до 20
// for(let i = 10; i<=20; i++){
//     console.log(i * i);
// }

// Сумма чисел от 10 до 20
// let sum = 0;

// for(let i = 10; i<=20; i++){
//     sum += i;
// }
// console.log(sum);

// Вывод х1 и х2
// function buttonClick(){
//     const x1 = document.getElementById('x1').value;
//     const x2 = document.getElementById('x2').value;

//     const resultDiv = document.getElementById('result');
//     resultDiv.append(`x1: ${x1}, x2: ${x2}`);
// }

// Сумма х1 и х2
// function buttonClick(){
//     const x1 = +(document.getElementById('x1').value);
//     const x2 = +(document.getElementById('x2').value);

//     const resultDiv = document.getElementById('result');
//     resultDiv.append(`x1 + x2 = ${x1+x2}`);
// }

// Проверка числа или строки
// function buttonClick(){
//     const x1 = +(document.getElementById('x1').value);
//     const x2 = +(document.getElementById('x2').value);

//     if(Number.isNaN(x1) || Number.isNaN(x2)){
//         alert("В поля х1 и х2 должны бфть введены числовые значения!")
//     } else {
//         const resultDiv = document.getElementById('result');
//     resultDiv.append(`x1 + x2 = ${x1+x2}`);
//     }
    
// }

// Проверка на пустую строку и удаление предыдущих данных из результата
// function buttonClick(){
//     const resultDiv = document.getElementById('result');
//     resultDiv.innerText = '';
//     let x1 = document.getElementById('x1').value;
//     let x2 = document.getElementById('x2').value;

//     if(Number.isNaN(+x1) || Number.isNaN(+x2)){
//         alert("В поля х1 и х2 должны быть введены числовые значения!");
//     } else if(x1.length === 0 || x2.length === 0 ){
//         alert('Поля x1 и x2 должны быть заполнены.');
//     } else {
        
//     resultDiv.append(`x1 + x2 = ${+x1+(+x2)}`);
//     }
// }

// Сумма всех чисел от х1 до х2 и кнопка "Очистить"

// function buttonClick(){
//     const resultDiv = document.getElementById('result');
//     resultDiv.innerText = '';
//     let x1 = document.getElementById('x1').value;
//     let x2 = document.getElementById('x2').value;

//     if(Number.isNaN(+x1) || Number.isNaN(+x2)){
//         alert("В поля х1 и х2 должны быть введены числовые значения!");
//     } else if(x1.length === 0 || x2.length === 0 ){
//         alert('Поля x1 и x2 должны быть заполнены.');
//     } else {
//         let sum = 0;

//         for( let i = +x1; i<= +x2; i++){
//             sum += i;
//         }

//         resultDiv.append(sum);
//     }
// }

// function buttonDelete(){
//     document.getElementById('x1').value = '';
//     document.getElementById('x2').value = '';
// }

// Добавление произведения



function buttonClick(){
    let radio = document.getElementsByName('radio');
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = '';
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;

    if(Number.isNaN(+x1) || Number.isNaN(+x2)){
        alert("В поля х1 и х2 должны быть введены числовые значения!");
    } else if(x1.length === 0 || x2.length === 0 ){
        alert('Поля x1 и x2 должны быть заполнены.');
    } else {
        let sum = 0;
        let mult = 1;
        let simple = [];

        cycle:for( let i = +x1; i<= +x2; i++){
            switch(true){
                case radio[0].checked:
                    sum += i;
                    break;
                case radio[1].checked:
                    mult *= i;
                    break;
                case radio[2].checked:
                    for(let j = 2; j < i; j++){
                        if( i % j == 0 ){
                            continue cycle;
                        }
                    }
            }
            (i !== 1) ? simple.push(i): false;   
        }

        switch(true){
            case radio[0].checked:
                resultDiv.append(sum);
                break;
            case radio[1].checked:
                resultDiv.append(mult);
                break;
            case radio[2].checked:
                resultDiv.append(simple);
                }
    }
    
}

function buttonDelete(){
    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
}




