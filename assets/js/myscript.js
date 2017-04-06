// JavaScript Document


//Il codice è eseguito solo quando tutto l’albero del documento è stato caricato (.ready)
//Tutto il codice compreso tra le due parentesi graffe verrà eseguito dopo, al caricamento della pagina.
//il metodo addClass che, come suggerisce il nome stesso, aggiunge la classe in argomento all’oggetto selezionato
$(document).ready(function() {
	
	$('<img/>').attr('id','nome').appendTo('#personale');
	
	
 $("q").addClass("evidenzia");
});

//Una caratteristica importante di jQuery è il concatenamento dei metodi: nell’esempio precedente avremmo potuto scrivere :
//vedi sorgentestampainfo
//$(document).ready(function() {
 //$("#elemento").addClass("class1").addClass("class2").addClass("class3");
//});
//



//La funzione jQuery che si prende cura di collegare un evento a un effetto si chiama “bind” (la cui traduzione in italiano è proprio collegare). Questa funzione prende come parametri di ingresso obbligatori, il tipo di evento, e una funzione da eseguire quando questo evento accade.
//.bind("tipo di evento","funzione da eseguire"
//i creatori di jQuery hanno introdotto un alias per tutti gli eventi della funzione “bind”.In questo esempio utilizzeremo la funzione “click”
//Accendi
$(document).ready(function() {
	
  $("a#on").click(function(){
    $("div.lampadina").addClass("accesa");
  });

//Spegni
  $("a#off").click(function(){
    $("div.lampadina").removeClass("accesa");
  });
	
//Toggle ci consente di alternare fra due o più funzioni al click del mouse, avendo cura di “ricordarsi” lo stato dell’oggetto che cambia.	
//la funzione html di jQuery. Questa sostituisce il testo all’interno di un elemento con quello specificato all’interno del file JavaScript, e si utilizza in questo modo:
//$("elemento-da-selezionare").html("testo da inserire nell'elemento")
	
   $("a#interruttore1").toggle(function() {
   $("div.lampadina").addClass("accesa");
	   //posso utilizzare al posto di $("a#interruttore1"), $(this)
	   $("a#interruttore1").html("Spegni Lampadina");

  }, function() {
   $("div.lampadina").removeClass("accesa");
	   $("a#interruttore1").html("Accendi Lampadina");
  });	

});



//un modo per gestire gli stili degli elementi attraverso jQuery, attraverso la funzione css. Questa funzione si applica a qualunque elemento selezionato, e può modificare qualsiasi proprietà css. La sintassi è la seguente:
//$("elementoDaSelezionare").css("proprietà","valore");
// $("div.lampadina").css("background-color","#F8F070");
//Per specificare proprietà multiple possiamo includerle in una variabile, e poi passare quest’ultima come parametro della funzione css, in questo modo:
//vedi sorgentestampainfo
//var stiliLampadina = {
//  "background-color" : "#F8F070",
 // "border" : "1px solid black"
//}
//$("div.lampadina").css(stiliLampadina);

/*Gli effetti predefiniti in jQuery

Primo esempio: fadeIn e fadeOut
...
$("div.lampadina").css("background-color","#F8F070").fadeIn("slow");
...
$("div.lampadina").css("background-color","#F8F070").fadeOut("slow");
...
Secondo esempio: show e hide
...
$("div.lampadina").css("background-color","#F8F070").show("normal");
...
$("div.lampadina").css("background-color","#F8F070").hide("fast");
...
Terzo esempio: slideUp e slideDown
vedi sorgentestampainfo
...
$("div.lampadina").css("background-color","#F8F070").slideDown(2000);
...
$("div.lampadina").css("background-color","#F8F070").slideUp(1500);
...*/

//Move and insert the h1 element at the end of each p element
$(document).ready(function(){
    $("button").click(function(){
        $("h1").appendTo("p");
    });
	
	
});



