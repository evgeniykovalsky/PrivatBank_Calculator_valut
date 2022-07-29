import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper=new Swiper();
let dateShow=document.querySelector('#time');
dateShow.innerText=flsFunctions.getDate();
///////////////////////////////////
let initCash=document.querySelector('#initCash');

 
let url= 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

initCash.addEventListener('change',function(){
switch (Number(initCash.value)) {
    case 1: url= 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';break;
    case 2: url= 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';break;

    default:break;
}

flsFunctions.getJson(url);
}
);
flsFunctions.getJson(url);

 


