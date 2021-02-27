'use strict';


//1つだけWInが隠れている
const num = 5;
const winner = Math.floor(Math.random() * num);

for (let i = 0; i < num; i++){
    var parentDiv = document.getElementById('frame');
    const div = document.createElement('div');
    div.classList.add('box');
    parentDiv.insertBefore(div, parentDiv.firstChild);

    div.addEventListener('click', () => {
        if(i == winner){
            div.textContent = 'win';
            div.classList.add('win');
        }else{
            div.textContent = 'lose';
            div.classList.add('lose');
        }
    });
}

//8割の確率で大吉
const btn = document.getElementById('btn');

btn.addEventListener('click',() => {

const n = Math.random();

    if (n < 0.8){
        btn.textContent = "大吉";
    } else {
        btn.textContent = "大凶";
    }
});
