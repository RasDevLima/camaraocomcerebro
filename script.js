
//Relogio
var dataHora, xHora, xDia, dia, mes, ano, saudacao;
dataHora = new Date();
xHora = dataHora.getHours();

if (xHora >= 0 && xHora <12) {saudacao = "Bom Dia! Hoje é"}
if (xHora >= 12 && xHora < 18) {saudacao = "Boa Tarde! Hoje é"}
if (xHora >= 18 && xHora <= 23) {saudacao = "Boa Noite! Hoje é"}

xDia = dataHora.getDay();

diaSem = new Array(7);

diaSem[0] = "Domingo";
diaSem[1] = "Segunda-feira";
diaSem[2] = "Terça-feira";
diaSem[3] = "Quarta-feira";
diaSem[4] = "Quinta-feira";
diaSem[5] = "Sexta-feira";
diaSem[6] = "Sábado";

dia = dataHora.getDate();
mes = dataHora.getMonth();

mesAno = new Array(12);

mesAno[0] = "Janeiro";
mesAno[1] = "Fevereiro";
mesAno[2] = "Março";
mesAno[3] = "Abril";
mesAno[4] = "Maio";
mesAno[5] = "Junho";
mesAno[6] = "Julho";
mesAno[7] = "Agosto";
mesAno[8] = "Setembro";
mesAno[9] = "Outubro";
mesAno[10] = "Novembro";
mesAno[11] = "Dezembro";

ano = dataHora.getFullYear();


document.getElementById("relogio").innerHTML = saudacao + " " + diaSem[xDia] + ", " + dia + " de " + mesAno[mes] + " de " + ano;


//Nav Fixed
jQuery(document).ready(function(){
	var navOffset = jQuery("nav").offset().top;

	jQuery('nav').wrap('<div class="nav-placeholder"></div>');
	jQuery('.nav-placeholder').height(jQuery('nav').outerHeight());

	jQuery(window).scroll(function(){
		var scrollPos = jQuery(window).scrollTop();

		if (scrollPos >= navOffset) {
			jQuery('nav').addClass('fixed-menu');
		} else {
			jQuery('nav').removeClass('fixed-menu');
    }
	});
});

//Slide
var lastImage = 1;
setInterval(() => {
	$('.slides .image-' + lastImage).removeClass('fadeIn');
	$('.slides .image-' + lastImage).addClass('slideOutRight');

	setTimeout(() => {

		$('.slides .image-' + lastImage).removeClass('slideOutRight animated');
		$('.slides .image-' + lastImage).addClass('hidden');

		lastImage++;
		if(lastImage > 5) {
			lastImage = 1;
		}

		$('.slides .image-' + lastImage).removeClass('hidden');
		$('.slides .image-' + lastImage).addClass('animated fadeIn');
	}, 1000);


}, 5 * 1000);

//Scroll Top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Typewritter

function typeWritter(texto,idElemento,tempo){
  var char = texto.split('').reverse();
  var typer = setInterval(function () {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    document.getElementById(idElemento).innerHTML += next;
  }, tempo);
}
typeWritter('Cultura, Arte, Tradição...','log',150);
