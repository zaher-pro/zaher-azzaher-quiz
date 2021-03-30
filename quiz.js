//  الاجوبة - answers //

let Answer_1 = document.querySelector('#quition1');
let Answer_2 = document.querySelector('#quition2');
let Answer_3 = document.querySelector('#quition3');
let Answer_4 = document.querySelector('#quition4');
let Ansewrs = document.querySelectorAll('.div-qu');
//  الدرجة - score //
let score_text = document.querySelector('#score');

//  عداد الاسئلة - n quition // 
let n_quition = document.querySelector('#n_quition');

//  buttons الازرار //
let button_Revenir = document.querySelector('#but-left');
let buttons_Suivante = document.querySelector('#but-right');

////////////////////////////

Answer_1.onclick = function () {
    alert('Good Answer, Bravo')
}