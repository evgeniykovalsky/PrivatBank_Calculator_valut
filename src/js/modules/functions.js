export function isWebp(){
    function testWebP(callback){
        let webP=new Image();
        webP.onload=webP.onerror=function(){
            callback(webP.height==2)
        };
        webP.src="data:image/webP;base64,UklGR";

    }
    testWebP(function(support){
        let className=support===true?'webp':'no-webp';
        document.documentElement.classList.add(className);
    })
}
/////////////Variables
let buttonEquals=document.querySelector('.myButton');
let buttonChange=document.querySelector('#change');
let inputGive=document.querySelector('#give');
let inputTake=document.querySelector('#take');
let selectCCY=document.querySelector('#ccy');
let selectBas_ccy=document.querySelector('#base_ccy');
var currency; 
var count=0;

export function getDate(){
    let date=new Date();
    let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
    return output;
}
export function getJson(url){

let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text'; 
request.send();
request.onload = function() {
let data = request.response; 
currency = JSON.parse(data); 
fillCelect(currency);


}

}
buttonChange.addEventListener('click',function(){
    //clear();
    let give=document.querySelector('#give').value;
    document.querySelector('#take').innerHTML='';
   
    
    let selectCCY=document.querySelector('#ccy');
    let selectBas_ccy=document.querySelector('#base_ccy');
    selectCCY.innerHTML='';
    selectBas_ccy.innerHTML='';
    let selCcy=[];
    let selBase=[];
    if(count%2==0){
    for (var i = 0; i < currency.length; i++) {
        if(!selBase.includes(currency[i].base_ccy)){
          let option = document.createElement('option');
          option.value=currency[i].base_ccy;
          option.innerText=currency[i].base_ccy;
          option.classList.add('options');
          selectCCY.appendChild(option);
          selBase.push(currency[i].base_ccy);
        }
        if(!selCcy.includes(currency[i].ccy)){
          let option1 = document.createElement('option');
          option1.value=currency[i].ccy;
          option1.innerText=currency[i].ccy;
          option1.classList.add('options');
          selectBas_ccy.appendChild(option1);
          selCcy.push(currency[i].ccy);
          
          }
      
    }
    }
    else{
        for (var i = 0; i < currency.length; i++) {
            if(!selCcy.includes(currency[i].ccy)){
          let option = document.createElement('option');
              option.value=currency[i].ccy;
              option.innerText=currency[i].ccy;
              option.classList.add('options');
              selectCCY.appendChild(option);
              selCcy.push(currency[i].ccy);
            }
            if(!selBase.includes(currency[i].base_ccy)){
              let option1 = document.createElement('option');
              option1.value=currency[i].base_ccy;
              option1.innerText=currency[i].base_ccy;
              option1.classList.add('options');
              selectBas_ccy.appendChild(option1);
              selBase.push(currency[i].base_ccy);
              
              }
          
        }
    }
    selectCCY=document.querySelector('#ccy');
    selectBas_ccy=document.querySelector('#base_ccy');
    for(let i=0;i<currency.length;i++){
       
        if(selectCCY.value==currency[i].ccy&&selectBas_ccy.value==currency[i].base_ccy){
           
            if(!isNaN(inputGive.value)){

              let res=Number(inputGive.value)*Number(currency[i].sale);
              inputTake.value=res.toFixed(2); 
              let temp=selectCCY.value;
              let temp2=selectBas_ccy.value
              selectCCY.value=temp2;
              selectBas_ccy.value=temp;
           }
            else{
                inputTake.value="Введите коррекное количество";
            }

        }
        else if(selectCCY.value=='BTC'&&selectBas_ccy.value=='UAH'){
            inputTake.value="Отсутствует курс размена";
        }
    }
   count++;

});
buttonEquals.addEventListener('click',function(){

     inputTake.innerHTML='';
     inputGive.innerHTML='';

    for(let i=0;i<currency.length;i++){
       
        if(selectCCY.value==currency[i].ccy&&selectBas_ccy.value==currency[i].base_ccy){
           
            if(!isNaN(inputGive.value)){

              let res=Number(inputGive.value)/Number(currency[i].sale);
              inputTake.value=res.toFixed(2); 

            }
            else{
                inputTake.value="Введите коррекное количество";
            }

        }
        else if(selectCCY.value=='BTC'&&selectBas_ccy.value=='UAH'){
            inputTake.value="Отсутствует курс размена";
        }
        else if(selectCCY.value=='USD'&&selectBas_ccy.value=='USD'||selectCCY.value=='EUR'&&selectBas_ccy.value=='RUR'){
            inputTake.value="Отсутствует курс размена";
        }
        
        
        
       

    }
       
 

});
function clear() {
    document.querySelector('#ccy').innerHTML = '';
    document.querySelector('#base_ccy').innerHTML = '';
  }
  
  export function fillCelect(jsonObj) {
    clear();
    currency= jsonObj;
    let selectCCY=document.querySelector('#ccy');
    let selectBas_ccy=document.querySelector('#base_ccy');
    let selCcy=[];
    let selBase=[];
    
    for (var i = 0; i < currency.length; i++) {
        if(!selCcy.includes(currency[i].ccy)){
      let option = document.createElement('option');
          option.value=currency[i].ccy;
          option.innerText=currency[i].ccy;
          option.classList.add('options');
          selectCCY.appendChild(option);
          selCcy.push(currency[i].ccy);
        }
        if(!selBase.includes(currency[i].base_ccy)){
          let option1 = document.createElement('option');
          option1.value=currency[i].base_ccy;
          option1.innerText=currency[i].base_ccy;
          option1.classList.add('options');
          selectBas_ccy.appendChild(option1);
          selBase.push(currency[i].base_ccy);
          
          }
      
    }
   
   
  }
  
