let count = 0;
let randomNumber = Math.floor(Math.random()*100);
let outSting = "";
const inputText = document.querySelector('.inputNumber');
const okButton = document.querySelector('.okButton');
const outText = document.querySelector('outnumber');




function checkRes(){
    let value = inputText.textContent;
    console.log(value);
    if(value === randomNumber){
        outText.textContent = "恭喜";
    
    }else if(count++>10){
        outText.textContent = "游戏结束";
    }else{
        if(value < randomNumber){
            console.log(outText.textContent);
            outText.textContent = "您猜的数小了";
           
        }else{
            outText.textContent = "您猜的数大了";
        }
    }
}
okButton.addEventListener('click',checkRes)

function resetGame(){
    count =0;
    randomNumber =Math.floor(Math.random()*100);
    outSting = "";
}