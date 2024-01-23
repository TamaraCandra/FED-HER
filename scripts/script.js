// JavaScript Document
const menu = document.querySelector("header nav ul:nth-of-type(2)");
const menu_btn = document.querySelector("header nav ul li button");
const cart_btn = document.querySelector("main button:nth-of-type(1)");
const nipple_btn = document.querySelector("main section:first-of-type button")

const cart_img = document.getElementById("shoppingCart");
const cartImg_path = "img/shoppingbasketFilled.png";

var hamburger_audio = new Audio('audio/whoosh.mp3');
var nipple_audio = new Audio('audio/smacked.mp3');

menu_btn.onclick = openMenu;
cart_btn.onclick = addCart;
nipple_btn.onclick = nippleAttack;


function openMenu (){
    menu.classList.toggle("toonMenu");
    hamburger_audio.play();
}

function addCart (){
//  foto veranderen aub
    console.log("tamara drukte op de knop!!!!");
    cart_img.src = cartImg_path;
}


function nippleAttack(){
    nipple_audio.play();
}



